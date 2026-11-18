const { test, expect } = require('@playwright/test');
test('encodes the full URL and renders returned links safely', async ({ page }) => {
  const original = 'https://example.com/?a=1&b=2#section';
  await page.route('https://api.shrtco.de/**', async route => {
    expect(new URL(route.request().url()).searchParams.get('url')).toBe(original);
    await route.fulfill({ json: { ok: true, result: { full_short_link: 'https://example.com/short', original_link: '<img src=x onerror=alert(1)>' } } });
  });
  await page.goto('/');
  await page.getByRole('textbox', { name: 'URL to shorten' }).fill(original);
  await page.getByRole('button', { name: 'Shorten it!' }).click();
  await expect(page.locator('#card a').first()).toHaveAttribute('href', original);
  await expect(page.locator('#card img')).toHaveCount(0);
  await expect(page.locator('#card a').last()).toHaveAttribute('href', 'https://example.com/short');
});
test('rejects unsafe input and unsafe returned links', async ({ page }) => {
  await page.route('https://api.shrtco.de/**', route => route.fulfill({ json: { ok: true, result: { full_short_link: 'javascript:alert(1)' } } }));
  await page.goto('/');
  const input = page.getByRole('textbox', { name: 'URL to shorten' });
  await input.fill('javascript:alert(1)');
  await input.press('Enter');
  await expect(page.locator('#shorten').getByRole('alert')).toContainText('complete http');
  await input.fill('https://example.com');
  await input.press('Enter');
  await expect(page.locator('#shorten').getByRole('alert')).toContainText('Unable');
  await expect(page.locator('#card')).toHaveCount(0);
});
test('shows pending, recovers from errors and allows retry', async ({ page }) => {
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  await page.route('https://api.shrtco.de/**', async route => {
    await gate;
    await route.fulfill({ status: 503, json: { ok: false } });
  });
  await page.goto('/');
  await page.getByRole('textbox', { name: 'URL to shorten' }).fill('https://example.com');
  await page.getByRole('button', { name: 'Shorten it!' }).click();
  await expect(page.getByRole('button', { name: 'Shortening…', exact: true })).toBeDisabled();
  release();
  await expect(page.locator('#shorten').getByRole('alert')).toContainText('service may be unavailable');
  await page.unroute('https://api.shrtco.de/**');
  await page.route('https://api.shrtco.de/**', route => route.fulfill({ json: { ok: true, result: { full_short_link: 'https://example.com/retry' } } }));
  await page.getByRole('button', { name: 'Shorten it!' }).click();
  await expect(page.locator('#card')).toContainText('/retry');
});
test('times out a stalled request', async ({ page }) => {
  await page.route('https://api.shrtco.de/**', () => {});
  await page.goto('/');
  await page.clock.install();
  await page.getByRole('textbox', { name: 'URL to shorten' }).fill('https://example.com');
  await page.getByRole('button', { name: 'Shorten it!' }).click();
  await page.clock.fastForward(11000);
  await expect(page.locator('#shorten').getByRole('alert')).toContainText('timed out');
  await expect(page.getByRole('button', { name: 'Shorten it!' })).toBeEnabled();
});
for (const denied of [true, false]) {
  test('clipboard ' + (denied ? 'denial selects manual fallback' : 'success is confirmed'), async ({ page }) => {
    await page.addInitScript(denied => {
      Object.defineProperty(navigator, 'clipboard', { value: {
        writeText: async text => {
          if (denied) throw new Error('Denied');
          window.copiedValue = text;
        }
      } });
    }, denied);
    await page.route('https://api.shrtco.de/**', route => route.fulfill({ json: { ok: true, result: { full_short_link: 'https://example.com/copied' } } }));
    await page.goto('/');
    await page.getByRole('textbox', { name: 'URL to shorten', exact: true }).fill('https://example.com');
    await page.getByRole('button', { name: 'Shorten it!' }).click();
    await page.getByRole('button', { name: 'Copy', exact: true }).click();
    if (denied) {
      await expect(page.locator('#card').getByRole('status')).toContainText('copy it manually');
      await expect(page.locator('#short-url')).toBeFocused();
      expect(await page.locator('#short-url').evaluate(el => el.selectionEnd - el.selectionStart)).toBe('https://example.com/copied'.length);
      await expect(page.getByRole('button', { name: 'Copied!', exact: true })).toHaveCount(0);
    } else {
      await expect(page.getByRole('button', { name: 'Copied!', exact: true })).toBeVisible();
      expect(await page.evaluate(() => window.copiedValue)).toBe('https://example.com/copied');
    }
  });
}

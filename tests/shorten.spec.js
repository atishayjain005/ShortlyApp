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

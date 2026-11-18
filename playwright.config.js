const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  workers: 2,
  use: { baseURL: 'http://127.0.0.1:3106' },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1280, height: 900 } } },
    { name: 'mobile', use: { viewport: { width: 320, height: 740 } } }
  ],
  webServer: { command: 'npm run start -- -p 3106', url: 'http://127.0.0.1:3106', reuseExistingServer: false }
});

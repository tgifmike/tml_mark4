import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('https://themanagerlife.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Manager Life/);
});


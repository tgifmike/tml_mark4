import { test, expect } from '@playwright/test';

test('GoogleAuth', async ({ page }) => {
	const GMAIL_EMAIL = process.env.GMAIL_EMAIL as string;
	const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD as string;

	await page.goto('https://www.themanagerlife.com/');
	await page
		.locator('div')
		.filter({ hasText: /^Toggle themeSign In$/ })
		.getByRole('link')
		.click();
	await page.getByRole('button', { name: 'Sign in with Google' }).click();
	await page.getByLabel('Email or phone').click();
	await page.getByLabel('Email or phone').fill(GMAIL_EMAIL);
	await page.getByRole('button', { name: 'Next' }).click();
	await page.getByLabel('Enter your password').click();
	await page.getByLabel('Enter your password').fill(GMAIL_PASSWORD);
	await page.getByRole('button', { name: 'Next' }).click();

	await expect(
		page.getByRole('heading', { name: 'Welcome to your Dashboard!' })
	).toBeVisible();
});

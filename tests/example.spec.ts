import { test, expect } from '@playwright/test'


test.describe('navigation', () => {
  tag: '@RegressionTest'
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/')
  })
  tag: '@RegressionTest'
  test('main navigation', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://playwright.dev/')
  })
  tag: '@FunctionalTest'
  test('get started link', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
})
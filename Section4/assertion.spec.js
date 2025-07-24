import { test, expect } from '@playwright/test';

test.describe('Assertions & Test Structure', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
  });

  // Test Case 1: Check if login page is visible
  test('should load login page', async ({ page }) => {
    const loginForm = await page.locator('//form[@name="login"]');
    await expect(loginForm).toBeVisible();
  });

  // Test Case 2: Successful Login Scenario
  test('should login with valid credentials', async ({ page }) => {
    await page.locator('//input[@name="username"]').first().fill('john');
    await page.locator('//input[@name="password"]').first().fill('demo');
    await page.locator("//*[@value='Log In']").first().click();

    await page.waitForTimeout(2000);
    const dashboard = await page.locator('.smallText').first().textContent();
    await expect(dashboard).toContain('Welcome');
  });

  // Test Case 3: Invalid Login Scenario
  test('should show error with invalid credentials', async ({ page }) => {
    await page.locator('//input[@name="username"]').first().fill('john123');
    await page.locator('//input[@name="password"]').first().fill('test');
    await page.locator("//*[@value='Log In']").first().click();

    await page.waitForTimeout(2000);
    const errorMessage = await page.locator('//p[@class="error"]');
    await expect(errorMessage).toHaveText('The username and password could not be verified.');
  });

  // Test Case 4: Check if registration link is available
  test('should show registration link', async ({ page }) => {
    const registerLink = await page.locator("//a[text()='Register']");
    await expect(registerLink).toBeVisible();
  });
});
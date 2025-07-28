const { test, expect } = require('@playwright/test');
const testData = require('../Section6/formData.json');

test.describe('Data driven testing1', () => {
    for (const data of testData) {
        test(`Submit form with: ${data.firstName} ${data.lastName}`, async ({ page }) => {
            await page.goto('https://demoqa.com/automation-practice-form');

            // Fill out form fields
            await page.locator("//*[@id='firstName']").first().fill(data.firstName);
            await page.locator("//*[@id='lastName']").first().fill(data.lastName);
            await page.locator("//*[@id='userEmail']").first().fill(data.email);
            await page.waitForTimeout(1000);
            await page.locator(`//label[@for="gender-radio-${data.gender === 'Male' ? 1 : 2}"]`).first().click();
            await page.waitForTimeout(500);
            await page.locator("//*[@id='userNumber']").first().fill(data.mobile);
            await page.locator("//*[@id='currentAddress']").first().fill(data.address);

            // Submit the form
            await page.locator("//*[@id='submit']").first().click();

            // Check modal confirmation
            await page.waitForTimeout(1000);
            await expect(page.locator('//*[@id="example-modal-sizes-title-lg"]')).toHaveText('Thanks for submitting the form');

            await page.waitForTimeout(1000);
            await page.locator('//*[@id="closeLargeModal"]').first().dispatchEvent('click');
            await page.close();
        });
    }
});

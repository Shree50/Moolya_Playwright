const {test} = require('@playwright/test')

test('actions and interactions', async({page})=>{
    await page.goto("https://parabank.parasoft.com/parabank/overview.htm");
    await page.locator("//input[@name='username']").first().fill('john');
    await page.locator("//input[@name='password']").first().fill('demo');
    await page.locator("//*[@value='Log In']").first().click();

    await page.locator("//a[text()='contact']").first().hover();
    await page.waitForTimeout(1000);

    await page.locator("//a[text()='contact']").first().click();
    await page.locator("//input[@id='name']").first().fill('shree');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1000);
    await page.keyboard.type('test@test.com');
    await page.waitForTimeout(1000);

})
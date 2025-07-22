const {test} = require('@playwright/test');

test('Locators and Selectors', async ({page}) =>{
    
    await page.goto("https://www.flipkart.com/");
    await page.getByText('Mobiles').first().click();
    await page.waitForTimeout(2000);

    await page.locator(".zDPmFV").first().fill('Poco F7');
    await page.waitForTimeout(2000);

    await page.getByRole('button',{type:'button'}).first().click();

    const elements = await page.locator("//div[@class='KzDlHZ']");
    for(let i=0; i<5; i++){
        console.log(await elements.nth(i).textContent());
    }
})
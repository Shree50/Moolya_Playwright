const{test,expect} = require('@playwright/test');

test('Handling Waits and Timeouts', async ({page})=>{
    await page.goto("https://www.flickr.com/explore");
    await page.waitForTimeout(2000);
    while(true){
        const count = await page.locator('//a[@aria-label="So In Love by Philippe Sainte-Laudy"]').count();
        if (count > 0) {
            await page.locator('//a[@aria-label="So In Love by Philippe Sainte-Laudy"]').scrollIntoViewIfNeeded();
            await page.waitForTimeout(1000);
            await page.screenshot({path: `tests/LearnP/Section5/sunflower.jpeg`});
            break;
        }
        await page.evaluate(() => window.scrollBy(0, 200));
        await page.waitForTimeout(300);
    }

    let found = false;
    while (true) {
        try {
            await page.waitForSelector('//*[@aria-label="Pink Rose Flower by Orbmiser"]', { timeout: 100 });
            found = true;
            await page.locator('//*[@aria-label="Pink Rose Flower by Orbmiser"]').scrollIntoViewIfNeeded();
            await page.waitForTimeout(1000);
            await page.screenshot({path: `tests/LearnP/Section5/rose.jpeg`});
            break;
        } catch (e) {
        }
        await page.evaluate(() => window.scrollBy(0, 200));
        await page.waitForTimeout(300);
    } 

    await page.locator("//*[text()='Trending']").last().click();
    await page.locator('//div[text()="unitedkingdom"]').first().waitFor({state:'visible'});
    await page.locator('//a[text()="Jobs"]').nth(1).scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    expect(await page.locator('//a[text()="Jobs"]').nth(1)).toBeVisible();
    await page.screenshot({path: `tests/LearnP/Section5/bottomPage.jpeg`});
})
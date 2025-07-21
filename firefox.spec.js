const {test,firefox} = require('@playwright/test');

test('Firefox browser',async()=>{
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/");
    await page.screenshot({ path: `tests/LearnP/Section1/firefox.jpeg`});
})
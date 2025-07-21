const {test, chromium} = require('@playwright/test');

test('Chrome Browser', async () =>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/");
    await page.screenshot({path: `tests/LearnP/Section1/chrome.jpeg`, fullPage: true});  
})
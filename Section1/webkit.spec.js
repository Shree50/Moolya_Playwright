const {test,webkit} = require('@playwright/test');

test('Firefox browser',async()=>{
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/");
    const element = await page.locator("//*[@id='navbar-main']")
    await element.screenshot({ path: `tests/LearnP/Section1/webkit.jpeg`});
})
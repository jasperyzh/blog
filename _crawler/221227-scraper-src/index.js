const puppeteer = require('puppeteer');


const target_url = "https://mdec.my/news";
const target_slug = "mdec-news";

(async () => {

    // https://github.com/puppeteer/puppeteer/blob/v13.5.1/docs/api.md#puppeteerlaunchoptions
    const browser = await puppeteer.launch({

    });

    // https://github.com/puppeteer/puppeteer/blob/v13.5.1/docs/api.md#browsernewpage
    const page = await browser.newPage();

    // https://github.com/puppeteer/puppeteer/blob/v13.5.1/docs/api.md#pagesetviewportviewport
    await page.setViewport({
        width: 1280,
        height: 1080,
        deviceScaleFactor: 1,
    });

    // https://github.com/puppeteer/puppeteer/blob/v13.5.1/docs/api.md#pagegotourl-options
    await page.goto(target_url);

    // https://github.com/puppeteer/puppeteer/blob/v13.5.1/docs/api.md#pagescreenshotoptions
    await page.screenshot({ path: `build/${target_slug.toString()}.png` });

    await browser.close();
})();

const scraperObject = {
    async scraper(browser, url) {

        try {
            console.log(`Navigating to ${url}...`);
            let page = await browser.newPage();

            await page.goto(url, { waitUntil: 'load', timeout: 13000 });
            // await page.setDefaultNavigationTimeout(0)
            await page.waitForSelector('head');

            let getMeta = await page.$eval('head', head => {
                let title = head.querySelector('title') ? head.querySelector('title').innerHTML : "";
                let description = head.querySelector('meta[name="description"]') ? head.querySelector('meta[name="description"]').content : "";
                let keywords = head.querySelector('meta[name="keywords"]') ? head.querySelector('meta[name="keywords"]').content : "";
                return {
                    title,
                    description,
                    keywords,
                }
            });
            return { ...getMeta, url };
        } catch (err) {
            console.log("err", err)
            return err
        }
    }
}

module.exports = scraperObject;
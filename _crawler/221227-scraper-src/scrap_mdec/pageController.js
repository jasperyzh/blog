const pageScraper = require('./pageScraper');

var fs = require('fs');

var urls = fs.readFileSync('../data/mdec2021-url.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim())
    .filter(e => e != "NULL" ? e : "") // remove white spaces for each line
// .map(e => e.split(',').map(e => e.trim())); // split each line to array
// console.log(data);
// console.log(JSON.stringify(data, '', 2)); // as json

async function scrapeAll(browserInstance) {
    let browser;
    try {
        browser = await browserInstance;
        let data = [];
        const STAGE = 5;

        const STEPS = 5;
        const limit = Math.floor((urls.length / 5));
        const current_step = limit * (STAGE - 1);
        for (let i = current_step; i < limit * STAGE; i += STEPS) {
            console.log(`current running: ${current_step} / ${limit * STAGE} / ${urls.length}`)

            async function parallel() {
                let getPageData = [];
                for (var j = 0; j < STEPS; j++) {
                    getPageData[j] = pageScraper.scraper(browser, `http://${urls[i + j]}`);
                }
                let test = [
                    await getPageData[0],
                    await getPageData[1],
                    await getPageData[2],
                    await getPageData[3],
                    await getPageData[4]
                ];
                console.log(test)
                return test
            }
            let getData = await parallel();
            console.log(getData)
            data = [...data, ...getData]
        }

        fs.writeFile(`mdec-metadata-0${STAGE}.json`, JSON.stringify(data), 'utf8', (err) => {
            if (err) {
                return console.log(err);
            }
            console.log(`The data has been scraped and saved successfully! View it at './mdec-metadata-0${STAGE}.json'`);
        });
        browser.close();

    }
    catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)
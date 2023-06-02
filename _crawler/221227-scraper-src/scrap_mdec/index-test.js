const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({dumpio: false});
  const baseURL = "https://stackoverflow.com/users";
  const startId = 6243352;
  const qty = 5;

  const usernames = (await Promise.allSettled(
    [...Array(qty)].map(async (_, i) => {
      const page = await browser.newPage();
      await page.goto(`${baseURL}/${i + startId}`);
      return page.$eval(
        ".profile-user--name", 
        el => el.children[0].innerText
      );
    })))
    .filter(e => e.status === "fulfilled")
    .map(e => e.value)
  ;
  console.log(usernames.length);
  await browser.close();
})();
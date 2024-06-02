// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");

// add CSV function
const csvmaker = function (data) {

    // Empty array for storing the values
    csvRows = [];

    // Headers is basically a keys of an object
    // which is id, name, and profession
    const headers = Object.keys(data);

    // As for making csv format, headers must
    // be separated by comma and pushing it
    // into array
    csvRows.push(headers.join(','));

    // Pushing Object values into array
    // with comma separation
    const values = Object.values(data).join(',');
    csvRows.push(values)

    // Returning the array joining with new line 
    return csvRows.join('\n')
}

async function saveHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com");
  
  // locate title and url of first ten articles
  const data = {
    for (let step = 0; step < 9; step++) {
      id: (step+1),
      article: page.getElementByClass("titleline"),
     // url: '';
    }
  }
  

  // download to csv
  
}

(async () => {
  await saveHackerNewsArticles();
})();

const puppeteer = require('puppeteer');

app.get('/scrape/:number', async (req, res) => {
    const { number } = req.params;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://unisat.io/search?q=${number}.bitpmap&type=text&p=1`);

    // Wait for 5 seconds
    await page.waitForTimeout(5000);

    // Extract the desired text
    const data = await page.evaluate(() => {
        const elements = Array.from(document.querySelectorAll('.result-notice'));
        return elements.map(e => e.innerText);
    });

    await browser.close();

    res.json({ data });
});

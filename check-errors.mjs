import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
  
  try {
    await page.goto('http://127.0.0.1:5173');
    await page.waitForTimeout(3000);
  } catch (err) {
    console.error('Puppeteer goto error:', err);
  }
  
  await browser.close();
})();

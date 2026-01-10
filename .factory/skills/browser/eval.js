#!/usr/bin/env node

import CDP from 'puppeteer-core';

async function main() {
  const args = process.argv.slice(2);
  const code = args[0];

  if (!code) {
    console.error('Usage: eval.js <javascript-code>');
    process.exit(1);
  }

  const browser = await CDP.connect({ browserURL: 'http://localhost:9222' });
  const pages = await browser.pages();

  if (pages.length === 0) {
    console.error('No page open. Navigate first with nav.js');
    process.exit(1);
  }

  const page = pages[0];
  const result = await page.evaluate(code);

  console.log(JSON.stringify(result, null, 2));
  await browser.disconnect();
}

main().catch(console.error);

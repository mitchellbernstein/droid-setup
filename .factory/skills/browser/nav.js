#!/usr/bin/env node

import CDP from 'puppeteer-core';

async function main() {
  const args = process.argv.slice(2);
  const url = args[0];
  const newTab = args.includes('--new');

  if (!url) {
    console.error('Usage: nav.js <url> [--new]');
    process.exit(1);
  }

  const browser = await CDP.connect({ browserURL: 'http://localhost:9222' });
  const pages = await browser.pages();

  if (newTab || pages.length === 0) {
    const page = await browser.newPage();
    await page.goto(url);
    console.log(`Opened new tab to ${url}`);
  } else {
    const page = pages[0];
    await page.goto(url);
    console.log(`Navigated to ${url}`);
  }

  await browser.disconnect();
}

main().catch(console.error);

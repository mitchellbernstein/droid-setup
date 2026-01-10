#!/usr/bin/env node

import path from 'path';
import { tmpdir } from 'os';
import CDP from 'puppeteer-core';

async function main() {
  const browser = await CDP.connect({ browserURL: 'http://localhost:9222' });
  const pages = await browser.pages();

  if (pages.length === 0) {
    console.error('No page open. Navigate first with nav.js');
    process.exit(1);
  }

  const page = pages[0];
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `screenshot-${timestamp}.png`;
  const filepath = path.join(tmpdir(), filename);

  await page.screenshot({ path: filepath, fullPage: false });
  console.log(filepath);
  await browser.disconnect();
}

main().catch(console.error);

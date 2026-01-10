#!/usr/bin/env node

import readline from 'readline';
import CDP from 'puppeteer-core';

async function main() {
  const prompt = process.argv.slice(2).join(' ') || 'Click on an element (Enter to finish):';

  const browser = await CDP.connect({ browserURL: 'http://localhost:9222' });
  const pages = await browser.pages();

  if (pages.length === 0) {
    console.error('No page open. Navigate first with nav.js');
    process.exit(1);
  }

  const page = pages[0];

  // Inject picker code
  await page.evaluate(() => {
    window.pickedElements = [];
    const style = document.createElement('style');
    style.textContent = `
      .picker-highlight {
        outline: 3px solid #ff0000 !important;
        background-color: rgba(255, 0, 0, 0.1) !important;
      }
      #picker-overlay {
        font-family: system-ui, sans-serif;
        padding: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000000;
        border-radius: 8px;
        max-width: 300px;
      }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'picker-overlay';
    overlay.innerHTML = `
      <div style="margin-bottom: 8px;">Click to select (Cmd/Ctrl+click for multiple)</div>
      <div id="picked-count">0 selected</div>
    `;
    document.body.appendChild(overlay);

    document.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const el = e.target;
      el.classList.add('picker-highlight');

      const info = {
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        classes: Array.from(el.classList).filter(c => c !== 'picker-highlight'),
        text: el.textContent.substring(0, 50).trim(),
        xpath: getXPath(el)
      };

      window.pickedElements.push(info);
      document.getElementById('picked-count').textContent = `${window.pickedElements.length} selected`;
    }, true);

    function getXPath(element) {
      if (element.id) {
        return `//*[@id="${element.id}"]`;
      }
      if (element === document.body) {
        return '/html/body';
      }

      let ix = 0;
      const siblings = element.parentNode?.children || [];
      for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] === element) {
          return getXPath(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
        }
        if (siblings[i].tagName === element.tagName) {
          ix++;
        }
      }
    }
  });

  console.log(prompt);

  // Wait for Enter key
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  await new Promise(resolve => rl.on('line', () => {
    rl.close();
    resolve();
  }));

  // Get picked elements
  const picked = await page.evaluate(() => window.pickedElements || []);

  console.log(JSON.stringify(picked, null, 2));

  // Cleanup
  await page.evaluate(() => {
    document.querySelectorAll('.picker-highlight').forEach(el => {
      el.classList.remove('picker-highlight');
    });
    const overlay = document.getElementById('picker-overlay');
    if (overlay) overlay.remove();
  });

  await browser.disconnect();
}

main().catch(console.error);

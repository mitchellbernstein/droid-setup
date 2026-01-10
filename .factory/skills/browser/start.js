#!/usr/bin/env node

import { spawn } from 'child_process';

const args = process.argv.slice(2);
const useProfile = args.includes('--profile');

const chromeArgs = [
  useProfile ? '--profile-directory=Default' : '--user-data-dir=/tmp/chrome-dev',
  '--remote-debugging-port=9222',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-default-apps',
  'about:blank'
].filter(Boolean);

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', chromeArgs, {
  detached: true,
  stdio: 'ignore'
});

chrome.unref();
console.log('Chrome started on :9222' + (useProfile ? ' with your profile' : ''));

// Renders front.html to entry.png with a local headless Chrome (or Edge), then checks the result against the
// contest's gate: a whole PNG, at most 1024 x 1024 pixels and 1 MiB. Run: node render.mjs
// Build-time only; the graded program (main.ts) just copies the committed entry.png.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const page = join(here, 'front.html');
const out = join(here, 'entry.png');

const browsers = [
  process.env.CHROME,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = browsers.find((b) => existsSync(b));
if (!browser) throw new Error('no Chrome or Edge found; set CHROME to its path');

execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1024,1024',
  `--screenshot=${out}`,
  pathToFileURL(page).href,
], { stdio: 'inherit' });

const png = readFileSync(out);
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
const bytes = statSync(out).size;
console.log(`entry.png ${width}x${height}, ${bytes} bytes`);
if (width > 1024 || height > 1024) throw new Error('image is over 1024 x 1024');
if (bytes > 1048576) throw new Error('image is over 1 MiB');

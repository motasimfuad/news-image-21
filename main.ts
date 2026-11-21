// The Day in One Page — Saturday 21 November 2026.
// The grader runs this with no network, so the front page is drawn ahead of time (front.html, rendered by
// render.mjs into entry.png) and this program only places those exact bytes at /output/entry.png.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));

// Fail loudly rather than hand the gate a file it would refuse: a PNG, at most 1024 x 1024 and 1 MiB.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!image.subarray(0, 8).equals(PNG_MAGIC)) throw new Error('entry.png is not a PNG');
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over 1024 x 1024`);
if (image.length > 1048576) throw new Error(`entry.png is ${image.length} bytes, over 1 MiB`);

writeFileSync(join(outDir, 'entry.png'), image);
console.log(`wrote ${join(outDir, 'entry.png')}: ${width}x${height}, ${image.length} bytes`);

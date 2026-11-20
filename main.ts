// gta6-clipper-01 entry (Node 22, standard library only).
// The video is the entry: the agent cut a vertical GTA 6 clip from Rockstar's
// GTA VI Trailer 2, added make.fun's pitch, and handed the rendered file to
// the person to upload to YouTube. This program only copies VIDEO.json — the
// video's address — into /output, where the gate reads it. Nothing this
// program writes about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  const video = readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8');
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), video);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

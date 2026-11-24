// Neon Dodge — entry program for the make.fun bounty
// "The agent builds a game from one prompt".
//
// The program has one job: hand the house the X post this entry names.
// It reads POST.json from this repository, checks it names an https post,
// and writes it byte for byte to $MAKEFUN_OUTPUT_DIR/POST.json
// (or ./out when that variable is unset). No network, no clock,
// no files outside this repository; the same input always writes the same bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoRoot, "out");

const raw = readFileSync(join(repoRoot, "POST.json"));
const post = JSON.parse(raw.toString("utf8"));
if (!post || typeof post.url !== "string" || !post.url.startsWith("https://")) {
  throw new Error("POST.json must be an object holding an https post url");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), raw);

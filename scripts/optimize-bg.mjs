import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imagesDir = path.join(root, "public", "images");

const backgrounds = [
  {
    input: "hero-bg-mobile.png",
    output: "hero-bg-mobile.webp",
    maxWidth: 828,
    quality: 76,
  },
  {
    input: "hero-bg-desktop.png",
    output: "hero-bg-desktop.webp",
    maxWidth: 1600,
    quality: 78,
  },
];

async function main() {
  for (const item of backgrounds) {
    const inputPath = path.join(imagesDir, item.input);
    const outputPath = path.join(imagesDir, item.output);

    try {
      await fs.access(inputPath);
    } catch {
      console.warn(`Skipping missing file: ${item.input}`);
      continue;
    }

    await sharp(inputPath)
      .rotate()
      .resize({ width: item.maxWidth, withoutEnlargement: true })
      .webp({ quality: item.quality, effort: 4 })
      .toFile(outputPath);

    const [inputStat, outputStat] = await Promise.all([
      fs.stat(inputPath),
      fs.stat(outputPath),
    ]);

    console.log(
      `✓ ${item.output} — ${(outputStat.size / 1024).toFixed(1)} KB (from ${(inputStat.size / 1024).toFixed(1)} KB)`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

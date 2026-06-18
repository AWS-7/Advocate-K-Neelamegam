import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public", "images", "logo.svg");
const iconsDir = path.join(root, "public", "icons");
const appDir = path.join(root, "src", "app");

const iconSizes = [
  { name: "favicon-16.png", size: 16 },
  { name: "favicon-32.png", size: 32 },
  { name: "icon-48.png", size: 48 },
  { name: "icon-96.png", size: 96 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
];

async function writePng(size, outputPath) {
  await sharp(logoPath)
    .resize(size, size, { fit: "contain", background: "#0B1D3A" })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
}

async function writeIco(pngPaths, outputPath) {
  const { default: pngToIco } = await import("png-to-ico");
  const buffer = await pngToIco(pngPaths);
  await fs.writeFile(outputPath, buffer);
}

async function main() {
  await fs.mkdir(iconsDir, { recursive: true });

  for (const item of iconSizes) {
    const outputPath = path.join(iconsDir, item.name);
    await writePng(item.size, outputPath);
    const stat = await fs.stat(outputPath);
    console.log(`✓ ${item.name} — ${(stat.size / 1024).toFixed(1)} KB`);
  }

  await writePng(96, path.join(appDir, "icon.png"));
  await writePng(180, path.join(appDir, "apple-icon.png"));

  const icoSources = [
    path.join(iconsDir, "favicon-16.png"),
    path.join(iconsDir, "favicon-32.png"),
    path.join(iconsDir, "icon-48.png"),
  ];

  await writeIco(icoSources, path.join(root, "public", "favicon.ico"));
  await fs.copyFile(path.join(root, "public", "favicon.ico"), path.join(appDir, "favicon.ico"));

  console.log("\n✓ favicon.ico written to public/ and src/app/");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

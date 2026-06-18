import fs from "fs/promises";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const { mdToPdf } = require("md-to-pdf");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const inputPath = path.join(root, "CLIENT_PROJECT_REPORT.md");
const outputPath = path.join(root, "CLIENT_PROJECT_REPORT.pdf");
const stylesheetPath = path.join(__dirname, "report-pdf.css");

async function main() {
  try {
    await fs.access(inputPath);
  } catch {
    console.error("Missing CLIENT_PROJECT_REPORT.md in project root.");
    process.exit(1);
  }

  const stylesheet = await fs.readFile(stylesheetPath, "utf8");

  await mdToPdf(
    { path: inputPath },
    {
      dest: outputPath,
      css: stylesheet,
      pdf_options: {
        format: "A4",
        printBackground: true,
        margin: {
          top: "18mm",
          right: "16mm",
          bottom: "20mm",
          left: "16mm",
        },
      },
      launch_options: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    },
  );

  const stat = await fs.stat(outputPath);
  console.log(`✓ PDF created: ${outputPath}`);
  console.log(`  Size: ${(stat.size / 1024).toFixed(1)} KB`);
}

main().catch((error) => {
  console.error("PDF generation failed:", error);
  process.exit(1);
});

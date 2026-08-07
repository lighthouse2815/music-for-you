import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(rootDirectory, "dist");

if (!outputDirectory.startsWith(`${rootDirectory}${sep}`)) {
  throw new Error("Thư mục build phải nằm trong thư mục dự án.");
}

rmSync(outputDirectory, { recursive: true, force: true });
mkdirSync(outputDirectory, { recursive: true });

for (const file of ["index.html", "styles.css", "app.js"]) {
  cpSync(resolve(rootDirectory, file), resolve(outputDirectory, file));
}

const assetsDirectory = resolve(rootDirectory, "assets");
if (!existsSync(assetsDirectory)) throw new Error("Không tìm thấy thư mục assets.");
cpSync(assetsDirectory, resolve(outputDirectory, "assets"), { recursive: true });

console.log("Đã tạo thư mục dist/ sẵn sàng deploy Cloudflare Pages.");

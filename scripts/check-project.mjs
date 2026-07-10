import { existsSync } from "node:fs";

const requiredPaths = [
  "package.json",
  "pnpm-workspace.yaml",
  "turbo.json",
  "tsconfig.json",
  ".gitignore",
  ".editorconfig",
  ".prettierrc",
  ".npmrc",
  ".env.example",
  "README.md",
  "apps",
  "packages",
  "scripts",
  "docs"
];

console.log("=================================");
console.log(" Project Structure Check");
console.log("=================================\n");

let missing = 0;

for (const item of requiredPaths) {
  if (existsSync(item)) {
    console.log(`✅ ${item}`);
  } else {
    console.log(`❌ ${item}`);
    missing++;
  }
}

console.log("");

if (missing === 0) {
  console.log("🎉 Project structure verified successfully.");
} else {
  console.log(`⚠️ Missing ${missing} required item(s).`);
}
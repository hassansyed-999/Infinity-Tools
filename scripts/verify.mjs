import { execSync } from "node:child_process";

const commands = [
  "node -v",
  "npm -v",
  "pnpm -v",
  "git --version"
];

console.log("=================================");
console.log(" Infinity Tools Verification");
console.log("=================================\n");

for (const command of commands) {
  try {
    const output = execSync(command, {
      encoding: "utf8"
    }).trim();

    console.log(`✅ ${command}`);
    console.log(output);
    console.log("");
  } catch {
    console.log(`❌ ${command} failed\n`);
  }
}

console.log("Verification completed.");
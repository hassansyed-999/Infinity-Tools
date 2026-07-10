import { execSync } from "node:child_process";

const commands = [
  ["Node.js", "node -v"],
  ["npm", "npm -v"],
  ["pnpm", "pnpm -v"],
  ["Git", "git --version"],
  ["Project Check", "pnpm check"],
  ["Verification", "pnpm verify"]
];

console.log("======================================");
console.log(" Infinity Tools Health Check");
console.log("======================================\n");

let failed = 0;

for (const [name, command] of commands) {
  try {
    execSync(command, { stdio: "ignore" });
    console.log(`✅ ${name}`);
  } catch {
    console.log(`❌ ${name}`);
    failed++;
  }
}

console.log("");

if (failed === 0) {
  console.log("🎉 All health checks passed.");
} else {
  console.log(`⚠️ ${failed} check(s) failed.`);
}
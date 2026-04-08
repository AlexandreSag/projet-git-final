const fs = require("fs");

const files = [
  "README.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  ".gitignore"
];

let failed = false;

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.error(`Fichier manquant: ${file}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("Lint OK");

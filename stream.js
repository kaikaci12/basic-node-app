const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `I am a big file ${i}\n`, { flag: "a" });
}
const { createReadStream } = require("fs");
const stream = createReadStream("./content/big.txt");

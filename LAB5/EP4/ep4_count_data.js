const fs = require("fs");

const reader = fs.createReadStream("input.txt");

let totalBytes = 0;

reader.on("data", (chunk) => {
  totalBytes += chunk.length;

  console.log(`Processed ${totalBytes} bytes`);
});

reader.on("end", () => {
  console.log("File reading completed.");
  console.log(`Total bytes processed: ${totalBytes}`);
});

reader.on("error", (err) => {
  console.log("Read Error:", err.message);
});

const fs = require("fs");

const reader = fs.createReadStream("input.txt", "utf8");

reader.on("data", (chunk) => {
  console.log("Received chunk:");
  console.log(chunk);
});

reader.on("end", () => {
  console.log("Reading completed.");
});

reader.on("error", (err) => {
  console.log("Error:", err.message);
});

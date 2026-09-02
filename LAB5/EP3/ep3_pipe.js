const fs = require("fs");

const reader = fs.createReadStream("input.txt");
const writer = fs.createWriteStream("copy.txt");

reader.pipe(writer);

writer.on("finish", () => {
  console.log("File copied successfully.");
});

reader.on("error", (err) => {
  console.log("Read Error:", err.message);
});

writer.on("error", (err) => {
  console.log("Write Error:", err.message);
});

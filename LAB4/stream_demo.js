const fs = require("fs");

const readStream = fs.createReadStream("input.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("output.txt");

readStream.on("data", (chunk) => {
  console.log("Reading chunk:");
  console.log(chunk);

  writeStream.write(chunk);
});

readStream.on("end", () => {
  console.log("File reading completed");

  writeStream.end();
});

readStream.on("error", (err) => {
  console.log("Error:", err.message);
});

writeStream.on("finish", () => {
  console.log("Data written successfully to output.txt");
});

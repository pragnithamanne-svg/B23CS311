const fs = require("fs");

const writer = fs.createWriteStream("output.txt");

writer.write("Welcome to Node.js.\n");
writer.write("This data is written using a Writable Stream.\n");
writer.write("Streams are useful for handling data efficiently.\n");

writer.end();

writer.on("finish", () => {
  console.log("Data written successfully.");
});

writer.on("error", (err) => {
  console.log("Error:", err.message);
});

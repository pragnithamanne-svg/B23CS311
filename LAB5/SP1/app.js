const fs = require("fs");

// Create a Readable Stream
const reader = fs.createReadStream("input.txt", "utf8");

// Create a Writable Stream
const writer = fs.createWriteStream("output.txt");

// Read data chunk by chunk
reader.on("data", (chunk) => {
    console.log("Received a chunk of data");

    // Write the chunk to the output file
    writer.write(chunk);
});

// Reading completed
reader.on("end", () => {
    writer.end();

    console.log("Reading completed.");
    console.log("Data written successfully to output.txt");
});

// Handle errors
reader.on("error", (err) => {
    console.log("Error while reading:", err.message);
});

writer.on("error", (err) => {
    console.log("Error while writing:", err.message);
});
const buffer = Buffer.from("Hello, FSD!");

console.log("Buffer:");
console.log(buffer);

console.log("Buffer to String:");
console.log(buffer.toString());

console.log("Buffer Length:");
console.log(buffer.length);

const buf = Buffer.alloc(10);

buf.write("Node.js");

console.log("Allocated Buffer:");
console.log(buf);

console.log("Allocated Buffer to String:");
console.log(buf.toString());

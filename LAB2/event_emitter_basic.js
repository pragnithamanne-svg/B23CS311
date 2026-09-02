const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", () => {
  console.log("Hello! Welcome to Node.js");
});

eventEmitter.emit("greet");
eventEmitter.emit("greet");

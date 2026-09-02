const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("login", () => {
  console.log("Checking username");
});

eventEmitter.on("login", () => {
  console.log("Checking password");
});

eventEmitter.on("login", () => {
  console.log("Login successful");
});

eventEmitter.emit("login");

function sayHello() {
  console.log("Hello");
}

const id = setInterval(sayHello, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("Interval stopped");
}, 7000);

console.log("Program started");

setImmediate(() => {
  console.log("Immediate function execution");
});

console.log("Program ended");

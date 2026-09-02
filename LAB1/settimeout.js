function simpleTimeout(callback, time) {
  setTimeout(callback, time);
}

console.time("timer");

console.log("Five seconds");

simpleTimeout(() => {
  console.timeEnd("timer");
  console.log("Two seconds");
}, 2000);

console.log("One second");

simpleTimeout(() => {
  console.log("One second");
}, 1000);

console.log("Five seconds");

simpleTimeout(() => {
  console.log("Five seconds");
}, 5000);

console.log("50 milliseconds");

simpleTimeout(() => {
  console.log("50 milliseconds");
}, 50);

const fs = require("fs");

fs.stat(__filename, function () {
  console.log("nextTick is exists");
});

setImmediate(function () {
  console.log("Immediate Timer 1 executed");
});

setImmediate(function () {
  console.log("Immediate Timer 2 executed");
});

process.nextTick(function () {
  console.log("Next Tick 2 executed");
});

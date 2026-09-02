function performTask(number, callback) {
  console.log("Performing task...");

  let result = number * number;

  callback(result);
}

function displayResult(result) {
  console.log("Task Completed");
  console.log("Result:", result);
}

performTask(5, displayResult);
function performTask(number, callback) {
  console.log("Performing task...");

  let result = number * number;

  callback(result);
}

function displayResult(result) {
  console.log("Task Completed");
  console.log("Result:", result);
}

performTask(5, displayResult);
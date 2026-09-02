function task1(callback) {
  console.log("Task 1 Completed");
  callback();
}

function task2(callback) {
  console.log("Task 2 Completed");
  callback();
}

task1(() => {
  task2(() => {
    console.log("All tasks completed");
  });
});
function task1(callback) {
  console.log("Task 1 Completed");
  callback();
}

function task2(callback) {
  console.log("Task 2 Completed");
  callback();
}

task1(() => {
  task2(() => {
    console.log("All tasks completed");
  });
});
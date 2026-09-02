let x = 0;
let y = 0;
let z = 0;

function displayValues() {
  console.log(`x = ${x}, y = ${y}, z = ${z}`);
}

function updateX() {
  x += 1;
}

function updateY() {
  y += 1;
}

function updateZ() {
  z += 1;
}

setInterval(updateX, 500);
setInterval(updateY, 1000);
setInterval(updateZ, 2000);

setInterval(displayValues, 1000);

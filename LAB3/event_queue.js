let eventQueue = [];

function addEvent(event) {
  eventQueue.push(event);
  console.log("Event added:", event);
}

function processEvents() {
  while (eventQueue.length > 0) {
    let event = eventQueue.shift();
    console.log("Processing event:", event);
  }
}

addEvent("Login");
addEvent("Download File");

console.log("Processing events...");

processEvents();

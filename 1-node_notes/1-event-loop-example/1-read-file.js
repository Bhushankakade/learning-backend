const { readFile, writeFile, read } = require("fs");

console.log("Starting a first task");

console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("complete next task");
});

console.log("starting next task");

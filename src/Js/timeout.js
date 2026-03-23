let intervalId;

process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on("data", (key) => {
  if (key.toString() === "s") {
    clearInterval(intervalId);
    console.log("Stopped by user");
    process.exit();
  }
});

function countUpTo(num) {
  let count = 0;
  intervalId = setInterval(() => {
    console.log(count);
    count++;
    if (count > num) {
      clearInterval(intervalId);
      process.exit();
    }
  }, 1000);
}

countUpTo(5);

function timer(duration, onComplete) {
  // Use setTimeout to simulate a timer that ends after duration ms
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

function onComplete(message) {
  console.log(message);
}

// Example invocation:
timer(5000, onComplete);

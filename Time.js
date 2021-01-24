// Set Time Out w/ Timer
setTimeout(() => alert("Hello"), 1000);

// Set Time Out w/out Timer
setTimeout(() => alert("Hello"));

// Set & Reset Time Out 
let timeOut = setTimeout(() => alert("Hello"), 1000);
clearTimeout(timeOut);

// Set & Reset Time Out w/ Interval
let interval = setInterval(() => alert("Hello"), 1000);
clearTimeout(interval);
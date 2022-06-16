// Set Time Out w/ Timer
setTimeout(() => alert("Hello"), 1000);

// Set Time Out w/out Timer
setTimeout(() => alert("Hello"));

// Set & Reset Time Out 
const oTimeOut = setTimeout(() => alert("Hello"), 1000);
clearTimeout(oTimeOut);

// Set & Reset Time Out w/ Interval
let oInterval = setInterval(() => alert("Hello"), 1000);
clearTimeout(oInterval);
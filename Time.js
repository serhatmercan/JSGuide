// Set Time Out w/ Timer
setTimeout(() => alert("Hello"), 1000);

// Set Time Out w/out Timer
setTimeout(() => alert("Hello"));

// Set & Reset Time Out 
const oTimeOutID = setTimeout(() => alert("Hello"), 1000);
clearTimeout(oTimeOutID);

// Set & Reset Time Out w/ Interval
const oIntervalID = setInterval(() => alert("Hello"), 1000);
clearInterval(oIntervalID);
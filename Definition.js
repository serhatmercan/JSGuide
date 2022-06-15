// VAR 
var sText = "Serhat";   // Global - Changeable

// LET
let sName = "Serhat";   // Local - Changeable

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// CONST
const sValue = "Serhat"; // Global - Just Changeable in Array
const aCars = ["Saab", "Volvo", "BMW"];

aCars[0] = "Opel";  // ["Opel", "Volvo", "BMW"]
aCars.push("Ford"); // ["Opel", "Volvo", "BMW", "Ford"]

// VARIABLE TYPE
typeof "Serhat"; // String
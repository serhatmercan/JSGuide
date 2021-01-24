// VAR 
var text = "Serhat"; // Global - Changeable

// LET
let text = "Serhat"; // Local - Changeable

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// CONST
const text = "Serhat"; // Global - Just Changeable in Array

const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Opel";
cars.push("Ford");

cars; // ["Opel", "Volvo", "BMW", "Ford"]

// VARIABLE TYPE
typeof "Serhat"; // String
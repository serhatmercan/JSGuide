// VAR 
var text = "Serhat"; // Global - Changeable
console.log(text); // "Serhat"

// LET
let data = "Serhat"; // Local - Changeable
console.log(data); // "Serhat"

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// CONST
const textConst = "Serhat"; // Global - Just Changeable in Array
console.log(textConst); // "Serhat"

const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Opel";
cars.push("Ford");

cars; // ["Opel", "Volvo", "BMW", "Ford"]

// VARIABLE TYPE
typeof "Serhat"; // String

// Run JS Command
eval("10 + 20");	// 30

function printData(){
    console.log("Eval Command");
}

eval(printData()); // Eval Command
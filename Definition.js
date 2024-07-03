// ARRAY & VARIABLE
const { removedTokens } = oEvent.getParameters() || {};
const [sFieldName, sFieldKey] = (removedTokens?.[0]?.getKey()?.split("---") || []);

// CONST
const sValue = "Serhat"; // Global - Just Changeable in Array
const aCars = ["Saab", "Volvo", "BMW"];

aCars[0] = "Opel";  // ["Opel", "Volvo", "BMW"]
aCars.push("Ford"); // ["Opel", "Volvo", "BMW", "Ford"]

// LET
let sName = "Serhat";   // Local - Changeable

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// VAR 
var sText = "Serhat";   // Global - Changeable

// VARIABLE TYPE
typeof "Serhat"; // String
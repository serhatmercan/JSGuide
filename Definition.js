// Array & Variable
const { removedTokens: aRemovedTokens } = oEvent.getParameters() || {};
const [sFieldName, sFieldKey] = (aRemovedTokens?.[0]?.getKey()?.split("---") || []);

// Const: Global - Just Changeable in Array
const sValue = "Serhat";
const aCars = ["Saab", "Volvo", "BMW"];

aCars[0] = "Opel";  // ["Opel", "Volvo", "BMW"]
aCars.push("Ford"); // ["Opel", "Volvo", "BMW", "Ford"]

// Let: Local - Changeable
let sName = "Serhat";

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// Var: Global - Changeable 
var sText = "Serhat";

// Variable Type
const sTypeOfVariable = typeof "Serhat"; // => String
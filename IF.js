/* eslint-disable no-unused-vars */
// IF(oEvent.getParameter("arguments").value) 
var value = oEvent.getParameter("arguments").value ? oEvent.getParameter("arguments").value : "";

// isNaN
var age = 10, // => "10"
	voteable;
	
if (isNaN(age)) {
	voteable = "Input is not a number";
} else {
	voteable = (age < 18) ? "Too young" : "Old enough";
}

// Logical Operators
// OR
let userInput = "";
const userName = userInput || "Serhat";	// => userName = "Serhat"

// AND
let isLoggedIn = true;
const shoppingCart = isLoggedIn && ["Books"];	// => shoppingCart = ["Books"]

const enteredValue = "";
const userNameAnd = enteredValue && "Serhat";	// => userName = ""

// Double NOT
const userNameNot = "Serhat";
!!userName; //	=> true
!userName; //	=> false
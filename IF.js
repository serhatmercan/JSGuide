// IF(oEvent.getParameter("arguments").value) 
var sValue = oEvent.getParameter("arguments").value ? oEvent.getParameter("arguments").value : "";

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
const userName = enteredValue && 'Serhat';	// => userName = ""

// Double NOT
const userName = 'Serhat';
!!userName //	=> true
!userName //	=> false
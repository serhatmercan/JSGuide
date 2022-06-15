/* eslint-disable no-unused-vars */
const sValue = oEvent.getParameter("arguments").getValue() ? oEvent.getParameter("arguments").getValue() : "";

// isNaN
const iAge = 10;
let sMessage = "";
	
if (isNaN(iAge)) {
	sMessage = "Input is not a number";
} else {
	sMessage = (iAge < 18) ? "Too Young" : "Old Enough";
}

// Logical Operators
// OR
const sUserInput = "";
sUserInput || "Serhat";	// => "Serhat"

// AND
const bLoggedIn = true;
bLoggedIn && ["Books"];	// => ["Books"]

const sEnteredValue = "";
sEnteredValue && "Serhat";	// => ""

// Double NOT
const sUserName = "SMERCAN";
!!sUserName; //	=> true
!sUserName;	//	=> false
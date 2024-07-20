// Definition
const sValue = oEvent?.getParameter("arguments")?.getValue() ?? "";

// isNaN
const iAge = 10;
const sMessage = isNaN(iAge) ? "Input is not a number" : (iAge < 18 ? "Too Young" : "Old Enough");

// Logical Operators
// OR
const sUserInput = "";
const sDefaultUserInpu = sUserInput || "Serhat"; // => "Serhat"

// AND
const bLoggedIn = true;
const aBooks = bLoggedIn && ["Books"]; // => ["Books"]

const sEnteredValue = "";
const sDefaultEnteredValue = sEnteredValue && "Serhat"; // => ""

// Double NOT
const sUserName = "SMERCAN";
const bIsUserNamePresent = !!sUserName; // => true
const bIsUserNameAbsent = !sUserName; 	// => false
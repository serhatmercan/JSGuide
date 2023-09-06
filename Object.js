/* eslint-disable no-empty */
/* eslint-disable no-prototype-builtins */
/* eslint-disable getter-return */
/* eslint-disable no-unused-vars */

// Check Object Property
const oBeginDate = oEvent.getParameter("exportSettings")?.workbook?.columns?.find(oColumn => oColumn.property === "BeginDate");

// Copy Object
const oData = {
  ID: "X",
  Value: 10
};
const xData = {
  ...oData
};
const xCopyData = {
  ...oData,
  Number: oData.Value
};

// Inner Object
const oPerson = {
  FirstName: "Serhat",
  LastName: "Mercan",
  Age: () => new Date().getFullYear() - 1994
};

console.log(oPerson.FirstName + " " + oPerson.LastName + " Age is " + oPerson.Age()); // Serhat Mercan Age is 28

// Loop
let sText = "";

for (let iIndex in oData) {
  sText += oData[iIndex] + " "; // => 'X 10 '
}

// METHODS
// Method: Accessing The Prototype
Object.getPrototypeOf(personX); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, ...}

// Method: Check Object Contains Property
oData.hasOwnProperty("ID"); // => True

// Method: Uppercase To All Strings
Object.keys(oData).forEach((xItem) => {
  if (typeof oData[xItem] == "string") {
    oData[xItem] = oData[xItem].toLocaleUpperCase()
  }
})

// Method: Returns All Properties As An Array
Object.getOwnPropertyNames(oData); // => ['ID', 'Value']

// Method: Get Values To Array
Object.values(oData); // => ['X', 10]

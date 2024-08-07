// Check Object Property
const oBeginDate = oEvent.getParameter("exportSettings")?.workbook?.columns?.find(oColumn => oColumn.property === "BeginDate");

// Copy Object
const oData = {
  ID: "X",
  Value: 10
};
const xData = { ...oData };
const xCopyData = {
  ...oData,
  Number: oData.Value
};

// Definition & Declaration
oData = {
  ID: "X",
  Key: "123",
  Text: "XYZ"
};

const { Key, Text } = oData;

Key; //  "123
Text; // "XYZ"

const { Key: sKey, Text: sTextII } = oData;

sKey; //  "123
sTextII; // "XYZ"

// Inner Object
const oPerson = {
  FirstName: "Serhat",
  LastName: "Mercan",
  Age: () => new Date().getFullYear() - 1994
};
const sPerson = `${oPerson.FirstName} ${oPerson.LastName} Age is ${oPerson.Age()}`; // Serhat Mercan Age is 28

// Loop
let sText = "";

for (const key in oData) {
  if (Object.hasOwn(oData, key)) {
    sText += `${oData[key]} `;
  }
}

// METHODS
const oPersonX = {};

// Method: Accessing The Prototype
Object.getPrototypeOf(oPersonX); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, ...}

// Method: Check Object Contains Property
oData.hasOwnProperty("ID"); // => true

// Method: Uppercase To All Strings
Object.keys(oData)?.forEach(xItem => {
  if (typeof oData[xItem] == "string") {
    oData[xItem] = oData[xItem].toLocaleUpperCase()
  }
})

// Method: Returns All Properties As An Array
Object.getOwnPropertyNames(oData); // => ['ID', 'Value']

// Method: Get Values To Array
Object.values(oData); // => ['X', 10]

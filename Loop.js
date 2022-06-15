// Array Loop
const aData = [];

// FOR => EACH
aData.forEach((oData) => console.log(oData));     // Array
aData.forEach((oData) => console.log(oData.ID));  // Array Object

// FOR => EACH
aData.forEach((oData, iIndex) => {
  console.log("Index is " + iIndex + ", Data is " + oData);
});

// FOR
for (let iIndex = 0; iIndex < aData.length; iIndex++) {
  aData[iIndex];
}

// FOR => IN - Object
for (let iIndex in aData) {
  aData[iIndex];
}

// FOR => OF - Array
for (let oData of aData) {
  oData;
}

// FOR => OF - String
const sText = "Serhat";

for (let sChar of sText) {
  console.log(sChar); // S e r h a t
}

// FOR => OF - Array Object
for (const oData of aData) {
  console.log(oData.Key);
}

// WHILE
var iIndex = 0;

while (aData[iIndex]) {
  console.log(aData[iIndex]);
  iIndex++;
}

// DO - WHILE
var iIndex = 0;

do {
  console.log(iIndex);
  iIndex++;
} while (iIndex < 10);

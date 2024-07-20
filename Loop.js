// Definition
const aData = [];

// forEach - Array
aData.forEach(oData => console.log(oData));     // Array
aData.forEach(oData => console.log(oData.ID));  // Array Object

// forEach - Index
aData.forEach((oData, iIndex) => {
  console.log(`Index is ${iIndex}, Data is ${oData}`);
});

// Classic - Loop
for (let i = 0; i < aData.length; i++) {
  console.log(aData[i]);
}

// for...in - Object
for (const i in aData) {
  if (aData.hasOwnProperty(i)) {
    console.log(aData[i]);
  }
}

// for...of - Array
for (const oData of aData) {
  console.log(oData);
}

// for...of - String
const sText = "Serhat";
for (const sChar of sText) {
  console.log(sChar); // S e r h a t
}

// for...of - Array Object
for (const oData of aData) {
  console.log(oData.Key);
}

// while 
let i = 0;
while (aData[i]) {
  console.log(aData[i]);
  i++;
}

// do...while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);
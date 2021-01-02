// Array Loop
var aData = [];

// For Each
aData.forEach((item) => console.log(item)); // Array
aData.forEach((item) => console.log(item.id)); // Array Object

// FOR
for (var i = 0; i < aData.length; i++) {
  aData[i];
}

// FOR => IN - Object
for (var i in aData) {
  aData[i];
}

// FOR => OF - Array
for (var x of aData) {
  x;
}
// FOR => OF - String
var sText = "Serhat";
for (var x of sText) {
  console.log(x); // S e r h a t
}
// FOR => OF - Array Object
for (const item of aData) {
  console.log(item.key);
}

// WHILE
var i = 0;
while (aData[i]) {
  console.log(aData[i]);
  i++;
}

// DO - WHILE
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

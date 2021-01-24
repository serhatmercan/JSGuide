// Array Loop
var data = [];

// For Each
data.forEach((item) => console.log(item)); // Array
data.forEach((item) => console.log(item.id)); // Array Object

// FOR
for (var i = 0; i < data.length; i++) {
  data[i];
}

// FOR => IN - Object
for (var i in data) {
  data[i];
}

// FOR => OF - Array
for (var x of data) {
  x;
}
// FOR => OF - String
var text = "Serhat";
for (var x of text) {
  console.log(x); // S e r h a t
}
// FOR => OF - Array Object
for (const item of data) {
  console.log(item.key);
}

// WHILE
var i = 0;
while (data[i]) {
  console.log(data[i]);
  i++;
}

// DO - WHILE
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

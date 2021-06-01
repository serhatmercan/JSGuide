// Array Loop
var data = [];

// FOR => EACH
data.forEach((item) => console.log(item)); // Array
data.forEach((item) => console.log(item.id)); // Array Object

// FOR => EACH
data.forEach((item, index) => {
  console.log("Index is " + index + ", Item is " + item);
});

// FOR
for (var i = 0; i < data.length; i++) {
  data[i];
}

// FOR => IN - Object
for (var k in data) {
  data[k];
}

// FOR => OF - Array
for (var x of data) {
  x;
}

// FOR => OF - String
var text = "Serhat";
for (var y of text) {
  console.log(y); // S e r h a t
}

// FOR => OF - Array Object
for (const item of data) {
  console.log(item.key);
}

// WHILE
var l = 0;
while (data[l]) {
  console.log(data[l]);
  l++;
}

// DO - WHILE
var m = 0;
do {
  console.log(m);
  m++;
} while (m < 10);

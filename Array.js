/* eslint-disable no-unused-vars */
// Define Array
let data = [];

// Add Data
data[0] = "Serhat";
data[1] = "Mercan";

// Length
data.length; // => 2

// Add a New Element
data.push("Selim"); // => data = ["Serhat","Mercan","Selim"]

// Remove The Last Element
data.pop(); // => data = ["Serhat","Mercan"]

// Loop => FOR
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// Loop => FOR - EACH - ARROW FUNCTION
data.forEach((item) => console.log(item.name));
["Serhat", "Mercan"].forEach((item) => console.log(item));

// Loop => FOR - EACH - Array Object
data.forEach((item, index) => {
  console.log("Index is " + index + ", Item is " + item);
});

// To String
data.toString(); // => Serhat,Mercan

// Join
data.join(" * "); // => Serhat * Mercan

// Remove The First Element
data.shift(); // => Mercan

// Add a New Element At The Beginning of Array
data.unshift("Serhat"); // => Serhat Mercan

// Delete Data
delete data[1]; // => data = ["Serhat", empty]

// Add New Items
data.splice(1, 0, "Selim", "Elif"); // => data = ["Serhat", "Selim", "Elif", "Mercan"]

// Remove Items
data.splice(0, 1); // 0 => Begin Index , 1 => Items Count ; => data = ["Selim", "Elif", "Mercan"]

// Removed Items to New Array
removedData = data.splice(1, 2);  // removedData = ["Elif", "Mercan"]

// Merge Two Arrays
const data2 = ["Selim", "Elif"];
data = data.concat(data2); // => data = ["Serhat", "Mercan", "Selim", "Elif"]

// Sort Alphabetically Ascending
data.sort(); // => ["Elif", "Mercan", "Selim", "Serhat"]

// Sort Alphabetically Descending
data.reverse(); // => ["Serhat", "Selim", "Mercan", "Elif"]

// Sort Numeric Array Ascending
let number = [1, 11, 7, 9];
number.sort((a, b) => a - b); // => [1, 7, 9, 11]

// Sort Numeric Array Descending
number.sort((a, b) => b - a); // => [11, 9, 7, 1]

// Array Sort
number = [1, 5, 99, 3, 4, 7];
number.sort((a, b) => a - b); // [1, 3, 4, 5, 7, 99]
number.sort((a, b) => b - a); // [99, 7, 5, 4, 3, 1]
number.reduce((sum, current) => sum + current); // 119

// MAX & MIN Number in Array
function getMaxValue(data) {
  return Math.max.apply(null, data);
}

function getMinValue(data) {
  return Math.min.apply(null, data);
}

getMaxValue(number); // => 11
getMinValue(number); // => 1

// MAP Method
let number2 = [];
number2 = number.map((x) => x * 2); 
console.log(number2); // number2 = [2, 22, 14, 18]

// MAP Method: Item & Index
data = ["X", "Y", "Z"];
data.map((item, index) => index + 1 + ". " + item); // ["1. X", "2. Y", "3. Z"]

// MAP Method: Change Array Of Objects Attribute
var arrayObj = [
  {
    Key: "1",
    Value: "10",
  },
  {
    Key: "2",
    Value: "100",
  },
];

arrayObj = arrayObj.map((item) => {
  return {
    ID: item.Key,
    Value: item.Value,
  };
});

// MAP Method: Delete Array Of Objects Attribute
arrayObj = arrayObj.map((item) => {
  delete item.Value;
});

// MAP Method: Split & Upper Case & Slice & Join
camelize = (data) => {
  return data
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};
console.log(camelize("list-style-image")); // "listStyleImage"

// FILTER Method
number.filter(x => x > 10); // Return the Array => 11

// FILTER w/ Array Object
const dataObj1 = { name: "Serhat" };
const dataObj2 = { name: "Sercan" };
const dataObj3 = { name: "Selim" };

const dataArr = [];

dataArr.push(dataObj1);
dataArr.push(dataObj2);
dataArr.push(dataObj3);

const filteredData = dataArr.filter(data => data.name.includes("Ser")); // => dataObj1 & dataObj2
console.log(filteredData);

// REDUCE Method
number.reduce(function (total, x) {
  return total + x; // => 1 + 11 + 7 + 9 = 28
});

number.reduce((total, x) => total + x, 0); // => 1 + 11 + 7 + 9 = 28

function sum(total, value) {
  return total + value;
}

number.reduce(sum); // => 1 + 11 + 7 + 9 = 28

// EVERY Method
number.every((x) => x > 0); // True
number.every((x) => x > 10); // False

// SOME Method
number.some((x) => x > 10); // True
number.some((x) => x > 15); // False

// Get Finding Item Index in Array
number.indexOf(7); // => 2
number.indexOf(2); // => -1 : Does Not Include

// Get Finding Last Item Index in Array
number[4] = 11;
number.lastIndexOf(11); // => 4

// Find
number.find((x) => x > 10); // 11

function findData(x) {
  return x > 1;
}

number.find(findData); // => 11

function findObject(x) {
  return x.Id === 2;
}

// Find Index
data.findIndex((x) => x.Index === 0); // -1 => Does Not Include

// Find Index w/ Parameters
data.findIndex((x) => x.Id === ID || x.Value === sValue); // -1 => Does Not Include

// Include
data = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

let result = [];

for (let item of data) {
  if (!result.includes(item)) {
    result.push(item);
  }
}

// Spread Operator => [...]
const mehmetsFamily = ["Mehmet", "Fatma", "Serhat"];
const sercansFamily = ["Sercan", "Yeliz", "Elif", "Selim"];

[...mehmetsFamily, "X", ...sercansFamily]; // ["Mehmet", "Fatma", "Serhat", "X", "Sercan", "Yeliz", "Elif", "Selim"]

// Copy Array w/out Reference => [...]
let copyData = [...data];

let numbers = [1, 4, 10, 9, 2];
Math.max(...numbers); // => 10

// Copy Array w/out Reference => SLICE
data = [1, 2, 3];
copyData = data.slice();  // => [1, 2, 3] 
copyItems = data.slice(0, 2); // => [1, 2]

// Destructure Array 
numbers = [1, 2, 3, 4, 5];

function findMinMax(nums) {
  let minNum = nums[0];
  let maxNum = nums[0];

  for (const num of nums) {
    if (num < minNum) {
      minNum = num;
    }
    if (maxNum < num) {
      maxNum = num;
    }
  }

  return [minNum, maxNum];
}

const [min, max] = findMinMax(numbers);
console.log(min, max); // => 1, 5
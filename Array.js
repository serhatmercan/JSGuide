// Definition
let aData = [];
const aNumbers = [1, 5, 99, 3, 4, 7];

// Array: Add Item
aData.push("Serhat");  // => aData = ["Serhat"]

// Array: Add Item At The Beginning of Array
aData.unshift("FB"); // => FB Serhat

// Array: Add Items w/ Index
aData.splice(1, 0, "Elif", "Selim"); // => aData = ["FB", Serhat", "Elif", "Selim"]

// Array: Declaration
aData[4] = "Mercan"; // => aData = ["FB", Serhat", "Elif", "Selim", "Mercan"]

// Array: Divide
aData.slice(0, 2); // => aData = ["FB", Serhat"]

// Array: Convert To String
aData.toString(); // => FB,Serhat,Elif,Selim,Mercan

// Array: Copy Array w/out Reference
const aCopyData = [...aData]; // => ["FB", Serhat", "Elif", "Selim", "Mercan"]

// Array: Every
aNumbers.every(iNumber => iNumber > 0);  // true
aNumbers.every(iNumber => iNumber > 10); // false

// Array: Filter
aNumbers.filter(iNumber => iNumber > 10); // => 99

// Array: Find
aNumbers.find(iNumber => iNumber > 10); // 99

// Array: Find Index
aNumbers.findIndex(iNumber => iNumber === 99); // 2
aNumbers.findIndex(iNumber => iNumber === 0);  // -1 => Does Not Include

// Array: Find Item Index
aNumbers.indexOf(7); // => 5
aNumbers.indexOf(2); // => -1 : Does Not Include

// Array: Find Last Item Index
aNumbers.lastIndexOf(7); // => 5
aNumbers.lastIndexOf(2); // => -1 : Does Not Include

// Array: Iteration - For
for (let i = 0; i < aData.length; i++) {
  console.log(aData[i]);
}

// Array: Iteration - For Each
aData.forEach((oItem) => console.log(oItem));

aData.forEach((oItem, iIndex) => {
  console.log("Index is " + iIndex + ", Item is " + oItem);
});

// Array: Join
aData.join(" * "); // => FB * Serhat * Elif * Selim * Mercan

// Array: Map
aNumbers.map((iNumber) => iNumber * 2); // [2, 10, 198, 6, 8, 14];

// Array: Map w/ Index
aData.map((oItem, iIndex) => iIndex + 1 + ". " + oItem); // ["1. FB", "2. Serhat", "3. Elif", "4. Selim", "5. Mercan"]

// Array: Max Value
Math.max(...aNumbers); // 99

// Array: Min Value
Math.min(...aNumbers); // 1

// Array: Merge Two Arrays
const aMergedData = aData.concat(["X", "Y"]); // => ["FB", "Elif", "Selim", "Serhat", "Mercan", "X", "Y"]
const aCombinedData = [...aData, ...aNumbers]; // => ["FB", "Elif", "Selim", "Serhat", "Mercan", 1, 5, 99, 3, 4, 7]

// Array: Reduce - Calculate Total Value
const iTotalValue = aNumbers.reduce((iSum, oCurrent) => iSum + oCurrent, 0); // 119

// Array: Remove First Item
aData.shift(); // => FB

// Array: Remove Item w/ Index
delete aData[0]; // => aData = ["Elif","Selim","Mercan"]

// Array: Remove Items w/ Indexes (Begin Index, Items Count)
aData.splice(2, 1); // => ["Mercan"]  => aData = ["Selim", "Elif"]

// Array: Remove Last Item
aData.pop(); // => Elif

// Array: Show Array w/ Table Format
console.table(aData);

// Array: Some
aNumbers.some(iNumber => iNumber > 0);   // true
aNumbers.some(iNumber => iNumber > 100); // false

// Array: Sort - Alphabetically - Ascending
aData.sort();

// Array: Sort - Alphabetically - Descending
aData.reverse();

// Array: Sort - Numerically - Ascending
aNumbers.sort((a, b) => a - b); // => [1, 3, 4, 5, 7, 99]

// Array: Sort - Numerically - Descending
aNumbers.sort((a, b) => b - a); // => [99, 11, 7, 5, 4, 3, 1]

// Array: Split & Map & Upper Case & Slice & Join
const convertCamelize = (aData) => {
  return aData
    .split("-")
    .map((sWord, iIndex) => iIndex == 0 ? sWord : sWord[0].toUpperCase() + sWord.slice(1))
    .join("");
};

convertCamelize("list-style-image"); // "listStyleImage"

// To Fixed Method
var iFixed = 9.656;
console.log(iFixed.toFixed(0)); // => 10
console.log(iFixed.toFixed(2)); // => 9.66
console.log(iFixed.toFixed(4)); // => 9.6560
console.log(iFixed.toFixed(6)); // => 9.656000

// Convert to Integer
console.log(parseInt(iFixed)); // => 9

// Convert to Float
console.log(parseFloat(iFixed)); // => 9.656

// Convert to Integer
let value = "10";

+value; // => 10

// Sum Two Float Numbers 
let number = (0.2 + 0.4).toFixed(1);    // => 0.6

// Convert Number To Binary
let number = (7).toString(2);   // 111

// Generate Random Number Between Two Integers
function generateRandomNumberBetweenTwoIntegers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

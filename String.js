// One or Double Quotes
var nameOdd = "I am called 'Serhat'",
	nameEven = 'I am called "Serhat"';

console.log(nameOdd); 	// I am called 'Serhat'
console.log(nameEven); // I am called "Serhat"

// Escape Character
console.log("We are the so-called \"Vikings\" from the north."); // We are the so-called "Vikings" from the north.
console.log("It\'s alright."); // It's alright.
console.log("The character \\ is called backslash."); // The character \ is called backslash.		

// Finding a String in a String 
var sentence = "Serhat Mercan locates in Serhat Mercan";

console.log(sentence.indexOf("Mercan")); // 7	=> First Index Of	  
console.log(sentence.lastIndexOf("Mercan")); // 32	=> Last Index Of
console.log(sentence.search("Serhat")); // 0	=> Search Index Of

console.log(sentence.substring(7, 13)); // Mercan			=> From 7 to 13
console.log(sentence.substr(7, 6)); // Mercan			=> From 7 Forward To 6 
console.log(sentence.substr(25)); // Serhat Mercan	=> From 25 Forward To End String
console.log(sentence.substr(-13)); // Serhat Mercan	=> From Ending 13 to End String

console.log(sentence.replace("Serhat", "Selim")); // Selim Mercan locates in Serhat Mercan	=> Replace
console.log(sentence.replace("/SERHAT/i", "Selim")); // Serhat Mercan locates in Serhat Mercan	=> Replace Ignore Case Sensitive
console.log(sentence.replace(/Serhat/g, "Selim")); // Selim Mercan locates in Selim Mercan		=> Replace ALL

// Concatenate String
var text1 = "Serhat",
	text2 = "Mercan";

console.log(text1.concat(" ", text2)); // Serhat Mercan

// Concatenate String - NEW
const firstNumber = 10;
const operator = "+";
const secondNumber = 5;
total = `${firstNumber} ${operator} ${secondNumber}`;	// => 10 + 5

var sName = "Serhat";
sName += " Mercan";
console.log(sName); // Serhat Mercan

// Remove Space
var trim = "   Serhat Mercan   ";
console.log(trim.trim()); // Serhat Mercan

// Find Index of Character
char = "Serhat";
console.log(text1.charAt(4)); // a

// To Upper & Lower Case
var caseValue = "Serhat";
console.log(caseValue.toUpperCase()); // SERHAT
console.log(caseValue.toLowerCase()); // serhat

// To Locale Upper & Lower Case
var caseLocaleValue = "ğüiçşö";
caseLocaleValue.toLocaleUpperCase(); // "ĞÜIÇŞÖ"
caseLocaleValue.toLocaleLowerCase(); // "ğüiçşö"

// Split String
var splitValue = "Serhat,Mercan,26";
splitData = splitValue.split(","); // aSplit = ["Serhat", "Mercan", "26"]

// Split String By Character Length
let complexData = "123456789012345678901234567890";
splits = complexData.match(/.{1,10}/g); // splits[0] = ["1234567890"]

// Change Value Type to String
var value = 5;
console.log(value.toString()); // "5"

// Remove Last Character
var text = "Serhat,";
text.slice(0, -1); // Serhat

// Convert String To Integer
var number = "10";
value = parseInt(number, 10); // 10

// Add Number To String
number = "10";
number.padStart(10, 0); // "0000000010"

// Repeat Method
const repeatValue = "Repeat Value";
repeatValue.repeat(5);	// "Repeat ValueRepeat ValueRepeat ValueRepeat ValueRepeat Value"

// Locale Compare: ASCII => Returns -1 , 0 , 1
var lc1 = "abc";
var lc2 = "abd";

lc1.localeCompare(lc2);	// -1
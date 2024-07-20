// String
const sText = "Serhat Mercan locates in Serhat Mercan";
const iValue = 5;

// Char At: Find Index of First Matched Character 
"Serhat".charAt(4); // => a

// Concatenate
"Serhat" + " " + "Mercan"; // => Serhat Mercan

// Concatenate - ES6
`${10} ${"+"} ${5}`; // => 10 + 5

// Escape Character
"We are the so-called \"Vikings\" from the north."; // => We are the so-called "Vikings" from the north.
"It\\'s alright.";                                  // => It's alright.
"The character \\ is called backslash.";            // => The character \ is called backslash.

// Index Of: First Index Of Text
sText.indexOf("Mercan"); // => 7  

// Last Index Of: Last Index Of Text
sText.lastIndexOf("Mercan"); // => 32

// Locale Compare: ASCII => Returns -1 , 0 , 1
"abc".localeCompare("abd");	// => -1

// Match: Split String By Character Length
"123456789012345678901234567890".match(/.{1,10}/g); // => ["1234567890", "1234567890", "1234567890"]

// One & Double Quotes
"I am called 'Serhat'";   // I am called 'Serhat'
"I am called \"Serhat\""; // I am called "Serhat"

// Pad Start: Add Characters To Complete Text
"10".padStart(10, 0); // => "0000000010"

// Replace: Replace First Matched 
sText.replace("Serhat", "Selim");

// Replace: Replace First Matched Ignore Case Sensitive
sText.replace("/SERHAT/i", "Selim");

// Replace: Replace All Matched 
sText.replace(/Serhat/g, "Selim");

// Search
sText.search("Serhat"); // => 0

// Slice: Remove Last Character
"Serhat,".slice(0, -1); // => Serhat

// Split
"Serhat,Mercan,26".split(","); // => ["Serhat", "Mercan", "26"]

// Substr: From ... Forward To ...
sText.substr(7, 6); // => Mercan

// Substr: From ... Forward To End
sText.substr(25); // => Serhat Mercan

// Substr: From Last Back To ...
sText.substr(-13); // => Serhat Mercan

// Substring: From ... To ...
sText.substring(7, 13); // => Mercan

// To Case: Lower & Upper 
"Serhat".toLowerCase(); // serhat
"Serhat".toUpperCase(); // SERHAT

// To Case: Locale Lower & Locale Upper 
"ğüiçşö".toLocaleLowerCase(); // "ğüiçşö"
"ğüiçşö".toLocaleUpperCase(); // "ĞÜIÇŞÖ"

// To String: Conversion
iValue.toString(); // => "5"

// Trim: Remove Space
"   Serhat Mercan   ".trim(); // Serhat Mercan
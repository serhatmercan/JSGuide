// REGULAR EXPRESSION
var text = "Serhat mercan serhat Mercan SERHAT MERCAN 1234567890";

// Any Characters Match => []
text.match(/[h]/g); // => ["h", "h"]

// Case Insensitive Matching => i
text.match(/MERCAN/i); // => ["mercan", index: 7, input: "Serhat mercan serhat Mercan SERHAT MERCAN", groups: undefined]

// All String [g] & Case Insensitive [i] 
text.match(/serhat/gi); // ["Serhat", "serhat", "SERHAT"]

// Any Digit Match => []
text.match(/[0-5]/g); // => ["1", "2", "3", "4", "5", "0"]

// Alternatives => | 
text.match(/(serhat|Serhat)/g); // => ["Serhat", "serhat"]

// Digit Match => \ 
text.match(/\d/g); // => ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Whitespace Character Match => \s
text.match(/\s/g); // => [" ", " ", " ", " ", " ", " "] 

// Word Match => \b
text.match(/\bSE/); // => ["SE", index: 28, input: "Serhat mercan serhat Mercan SERHAT MERCAN 1234567890", groups: undefined]

// Contains Word => .+
text.match(/an+/g); // => ["an", "an"]

// Contains Word Zero or More => .*	
text.match(/an*/g); // => ["a", "an", "a", "an"]

// Contains Word Zero or One => .?
text.match(/10?/g); // => ["1"]

// Check String Contains Number
/\d/.test(text); // True

// Get Left / Right Context
var regExp = new RegExp("Mercan", "g");
regExp.test(text); // True
RegExp.leftContext; // "Serhat mercan serhat "
RegExp.rightContext; // " SERHAT MERCAN 1234567890"

// Replace Text
// Single
regExp = /Serhat/gi;
text.replace(regExp, "Selim");  // "Selim mercan Selim Mercan Selim MERCAN 1234567890"
// Multi
regExp = /(Serhat|Selim)/gi; 
text.replace(regExp, "Elif"); // "Elif mercan Elif Mercan Elif MERCAN 1234567890"

// Divide Text To Array
regExp = / /gi;
text.split(regExp); // ["Serhat", "mercan", "serhat", "Mercan", "SERHAT", "MERCAN", "1234567890"] 

// Check Beginning Value
regExp = /^Serhat/i;
regExp.test(text); // True

regExp = /^Mercan/i;
regExp.test(text); // False

// Check Ending Value
regExp = /Mercan$/i;
regExp.test(text); // False

regExp = /1234567890$/i;
regExp.test(text); // True

// Except Value
regExp = /[^Serhat ]/gi;
text.match(regExp); // ["m", "c", "n", "M", "c", "n", "M", "C", "N", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Except Value Range
regExp = /[^a-zA-Z ]/g;
text.match(regExp); // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
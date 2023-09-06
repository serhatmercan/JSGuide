// REGULAR EXPRESSION
const sText = "Serhat mercan serhat Mercan SERHAT MERCAN 1234567890";

// Any Characters Match => []
sText.match(/[h]/g); // => ["h", "h"]

// Case Insensitive Matching => i
sText.match(/MERCAN/i); // => ["mercan", index: 7, input: "Serhat mercan serhat Mercan SERHAT MERCAN", groups: undefined]

// All String [g] & Case Insensitive [i] 
sText.match(/serhat/gi); // ["Serhat", "serhat", "SERHAT"]

// Any Digit Match => []
sText.match(/[0-5]/g); // => ["1", "2", "3", "4", "5", "0"]

// Alternatives => | 
sText.match(/(serhat|Serhat)/g); // => ["Serhat", "serhat"]

// Digit Match => \ 
sText.match(/\d/g); // => ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Whitespace Character Match => \s
sText.match(/\s/g); // => [" ", " ", " ", " ", " ", " "] 

// Word Match => \b
sText.match(/\bSE/); // => ["SE", index: 28, input: "Serhat mercan serhat Mercan SERHAT MERCAN 1234567890", groups: undefined]

// Contains Word => .+
sText.match(/an+/g); // => ["an", "an"]

// Contains Word Zero or More => .*	
sText.match(/an*/g); // => ["a", "an", "a", "an"]

// Contains Word Zero or One => .?
sText.match(/10?/g); // => ["1"]

// Check String Contains Number
/\d/.test(sText); // True

// Get Left / Right ConsText
const sRegExp = new sRegExp("Mercan", "g");

sRegExp.test(sText); // True
sRegExp.leftConsText; // "Serhat mercan serhat "
sRegExp.rightConsText; // " SERHAT MERCAN 1234567890"

// Replace sText
// Single
sRegExp = /Serhat/gi;
sText.replace(sRegExp, "Selim");  // "Selim mercan Selim Mercan Selim MERCAN 1234567890"
// Multi
sRegExp = /(Serhat|Selim)/gi;
sText.replace(sRegExp, "Elif"); // "Elif mercan Elif Mercan Elif MERCAN 1234567890"

// Divide sText To Array
sRegExp = / /gi;
sText.split(sRegExp); // ["Serhat", "mercan", "serhat", "Mercan", "SERHAT", "MERCAN", "1234567890"] 

// Check Alphabetic & Space Only - EN
/^[a-zA-Z() ]+$/.test(sRegExp);

// Check Alphabetic & Space Only - TR
/^[\p{L}\s]+$/u.test(sRegExp);

// Check Beginning Value
sRegExp = /^Serhat/i;
sRegExp.test(sText); // True

sRegExp = /^Mercan/i;
sRegExp.test(sText); // False

// Check Only Digit
/^\d+$/.test(sRegExp);

// Check Ending Value
sRegExp = /Mercan$/i;
sRegExp.test(sText); // False

sRegExp = /1234567890$/i;
sRegExp.test(sText); // True

// Except Value
sRegExp = /[^Serhat ]/gi;
sText.match(sRegExp); // ["m", "c", "n", "M", "c", "n", "M", "C", "N", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Except Value Range
sRegExp = /[^a-zA-Z ]/g;
sText.match(sRegExp); // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// Regular Expression
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
/\d/.test(sText); // true

// Get Left / Right ConsText
sText.leftConsText;  // => "Serhat mercan serhat "
sText.rightConsText; // => " SERHAT MERCAN 1234567890"

// Replace sText
sText.replace(/Serhat/gi, "Selim"); // => "Selim mercan Selim Mercan Selim MERCAN 1234567890"
sText.replace(/(Serhat|Selim)/gi, "Elif"); // => "Elif mercan Elif Mercan Elif MERCAN 1234567890"

// Divide sText To Array
sText.split(/ /gi); // => ["Serhat", "mercan", "serhat", "Mercan", "SERHAT", "MERCAN", "1234567890"] 

// Check Alphabetic & Space Only - EN
/^[a-zA-Z() ]+$/.test(sText); // => false

// Check Alphabetic & Space Only - TR
/^[\p{L}\s]+$/u.test(sText); // => false

// Check Beginning Value
/^Serhat/i.test(sText); // => true 
/^Mercan/i.test(sText); // => false

// Check Only Digit
/^\d+$/.test(sText); // => false

// Check Ending Value
/Mercan$/i.test(sText);     // => false
/1234567890$/i.test(sText); // => true

// Except Value
sText.match(/[^Serhat ]/gi); // => ["m", "c", "n", "M", "c", "n", "M", "C", "N", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Except Value Range
sText.match(/[^a-zA-Z ]/g); // => ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Function: Convert String Concatenate & Upper Case
const aData = ["AbcIndicator"];
const aConvertedData = aData.forEach(sData => convertString(sData)); // => ["ABC_INDICATOR"]

convertString(sString => {
    sString.replace(/([A-Z])/g, '_$1')?.trim()?.toUpperCase()?.slice(1);
})
// Math Operations
const iValue = 9.656;

// ABS: Absolute 
const fAbsoluteValue = Math.abs(-4.5); // => 4.5

// CEIL: Up Nearest Integer
const iCeilValue = Math.ceil(2.8); // => 3

// FLOOR: Down Nearest Integer
const iFloorValue = Math.floor(2.8); // => 2

// IS INTEGER: Check Integer or Not
const bIsIntegerI = Number.isInteger(10);    // => true
const bIsIntegerII = Number.isInteger(10.5); // => false

// MAX: Max Value In List
const iMaxValue = Math.max(0, 150, 30, 20, -8, -200); // => 150

// MIN: Min Value In List
const iMinValue = Math.min(0, 150, 30, 20, -8, -200); // => -200

// PARSING: Integer / Float
const iParsedInt = parseInt(iValue);     // => 9
const fParsedFloat = parseFloat(iValue); // => 9.656
const fUnaryPlusValue = +iValue;         // => 9.656

// POW: Exponentiation
const iPowValueI = Math.pow(5, 2); // => 25
const iPowValueII = 5 ** 2;        // => 25

// RANDOM: Generate Random Number
const fRandomValue = Math.random();                      // => Between 0 And 1
const iRandomValue = Math.floor(Math.random() * 10) + 1; // => Between 1 And 10

// ROUND: Rounded To The Nearest Integer
const iRoundValueI = Math.round(2.8);  // => 3
const iRoundValueII = Math.round(2.3); // => 2

// SQRT: Square Root 
const iSqrtValue = Math.sqrt(64); // => 8

// TO FIXED: Convert Integer To String
const sFixedValue0 = iValue.toFixed(0);        // => 10
const sFixedValue2 = iValue.toFixed(2);        // => 9.66
const sFixedValue4 = iValue.toFixed(4);        // => 9.6560
const sFixedValue6 = iValue.toFixed(6);        // => 9.656000
const sFixedValueSum = (0.2 + 0.4).toFixed(1); // => 0.6

// TO STRING: Convert Number To Binary
const sBinaryString = (7).toString(2); // => 111

// TRUNC: Decimal Number
const iTruncValue = Math.trunc(9.123); // => 9

// Math Function
const generateRandomNumberBetweenTwoIntegers = (iMin, iMax) => Math.floor(Math.random() * (iMax - iMin + 1) + iMin);
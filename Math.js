// Math //

const iValue = 9.656;

// ABS: Absolute 
Math.abs(-4.5); // 4.5

// CEIL: Up Nearest Integer
Math.ceil(2.8); // 3

// FLOOR: Down Nearest Integer
Math.floor(2.8); // 2

// IS INTEGER: Check Integer or Not
Number.isInteger(10); // True
Number.isInteger(10.5); // False

// MAX: Max Value In List
Math.max(0, 150, 30, 20, -8, -200); // 150

// MIN: Min Value In List
Math.min(0, 150, 30, 20, -8, -200); // -200

// PARSING: Integer / Float
parseInt(iValue);   // => 9
parseFloat(iValue); // => 9.656
+iValue;            // => 9.656

// POW: Exponentiation
Math.pow(5, 2); 		// => 5 ^ 2 = 25
console.log(5 ** 2);	// => 5 ^ 2 = 25

// RANDOM: Generate Random Number
Math.random(); 						// Between 0 And 1
Math.floor(Math.random() * 10) + 1; // Between 1 And 10

// ROUND: Rounded To The Nearest Integer
Math.round(2.8); // 3
Math.round(2.3); // 2

// SQRT: Square Root 
Math.sqrt(64); // 8

// TO FIXED: Convert Integer To String
iValue.toFixed(0);          // => 10
iValue.toFixed(2);          // => 9.66
iValue.toFixed(4);          // => 9.6560
iValue.toFixed(6);          // => 9.656000
(0.2 + 0.4).toFixed(1);     // => 0.6

// TO FIXED: Convert Number To Binary
(7).toString(2);    // => 111

// TRUNC: Decimal Number
Math.trunc(9.123);	// => 9

// Math Function //
generateRandomNumberBetweenTwoIntegers = (iMin, iMax) => Math.floor(Math.random() * (iMax - iMin + 1) + iMin);

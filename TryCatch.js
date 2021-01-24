// TRY CATCH
try {
	adddlert("Welcome Serhat!");
} catch (err) {
	console.log(err.message); // => adddlert is not defined
}

// THROW
var x;

getError(x);

function getError(x) {
	try {
		if (x == "") throw "empty";
		if (isNaN(x)) throw "not a number";
		x = Number(x);
		if (x < 5) throw "too low";
		if (x > 10) throw "too high";
	} catch (err) {
		console.log(err);
	} finally {
		x = "";
	}
}

// RANGE & REFERENCE & SYNTAX & TYPE & URI ERROR
var range = 1;
try {
	range.toPrecision(500); // A number cannot have 500 significant digits
} catch (err) {
	console.log(err.name);
}

// Error Message
throw new Error("Error an occured !");	// VM260:1 Uncaught Error: Error an occured ! at <anonymous>:1:7
// ARROW FUNCTION 

// Using w/out Parameters
var arrow = () => "Hello World!";
arrow(); // "Hello World!"

// Using w/ Parameter
var arrow = val => "Hello " + val;
arrow("Serhat"); // "Hello Serhat"

// Using w/ Parameters
var arrow = (sVal1, sVal2) => "Hello " + sVal1 + " " + sVal2;
arrow("Serhat", "Mercan"); // "Hello Serhat Mercan"

// Loop => FOR - EACH - ARROW FUNCTION
var data = [];
data.forEach(item => console.log(item.name));

// Return Array Object
getObject = () => {
	return {
		id: "",
		name: ""
	}
};
// ARROW FUNCTION 

// Using w/out Parameters
var arrow = () => "Hello World!";
arrow(); // "Hello World!"

// Using w/ Parameter
var arrowParameter = val => "Hello " + val;
arrowParameter("Serhat"); // "Hello Serhat"

// Using w/ Parameters
var arrowParameters = (sVal1, sVal2) => "Hello " + sVal1 + " " + sVal2;
arrowParameters("Serhat", "Mercan"); // "Hello Serhat Mercan"

// Loop => FOR - EACH - ARROW FUNCTION
var data = [];
data.forEach(item => console.log(item.name));

// Return Array Object
getObject = () => {
	return {
		id: "",
		name: ""
	};
};
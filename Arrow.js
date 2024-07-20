// Using w/out Parameters
const arrow = () => "Hello World!";
arrow(); // "Hello World!"

// Using w/ Parameter
const arrowParameter = sText => `Hello ${sText}`;
arrowParameter("Serhat"); // "Hello Serhat"

// Using w/ Parameters
const arrowParameters = (sTextI, sTextII) => `Hello ${sTextI} ${sTextII}`;
arrowParameters("Serhat", "Mercan"); // "Hello Serhat Mercan"

// Loop => FOR - EACH - Arrow Function
aData.forEach(({ Name }) => console.log(Name));

// Return Array Object
const getObject = () => ({ ID: "", Name: "" }); // { ID: "", Name: "" }
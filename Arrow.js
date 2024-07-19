// Using w/out Parameters
const fnArrow = () => "Hello World!";
fnArrow(); // "Hello World!"

// Using w/ Parameter
const fnArrowParameter = sText => `Hello ${sText}`;
fnArrowParameter("Serhat"); // "Hello Serhat"

// Using w/ Parameters
const fnArrowParameters = (sTextI, sTextII) => `Hello ${sTextI} ${sTextII}`;
fnArrowParameters("Serhat", "Mercan"); // "Hello Serhat Mercan"

// Loop => FOR - EACH - Arrow Function
aData.forEach(({ Name }) => console.log(Name));

// Return Array Object
const getObject = () => ({ ID: "", Name: "" }); // { ID: "", Name: "" }
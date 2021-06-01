/* eslint-disable no-unused-vars */
// The Arguments Object
function sumAll() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

sumAll(5, 10, 15, 20); // => 50

// CALL & APPLY
var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

var personX = {
  firstName: "Serhat",
  lastName: "Mercan",
};

person.fullName.call(personX, "İstanbul", "Turkey"); // => "Serhat Mercan,İstanbul,Turkey"
person.fullName.apply(personX, ["İstanbul", "Turkey"]); // => "Serhat Mercan,İstanbul,Turkey"

// Function Binding
let user = {
  name: "Serhat",
};

function sayName(value) {
  console.log(value + " " + this.name);
}

sayName.bind(user)("Hello"); // Hello Serhat

// New Syntax: The Function w/ out Parameters
let hello = new Function("console.log(\"Hello\")");

hello();

// New Syntax: Declare The Function w/ Parameters
let sum = new Function("a", "b", "return a + b");
sum(1, 2); // 3

// New Syntax: Closure
let closure = () => {
  let hello = new Function("console.log(\"Hello\")");
  return hello;
};

closure()(); // Hello

// Default Parameters
function getPerson(
  firstName,
  yearOfBirth,
  lastName = "Mercan",
  nationality = "Turkey"
) {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

let serhat = new getPerson("Serhat", 1994); // {FirstName: "Serhat", YearOfBirth: 1994, LastName: "Mercan", Nationality: "Turkey"}
let fatma = new getPerson("Fatma", 1967, "Tercan"); // {FirstName: "Fatma", YearOfBirth: 1967, LastName: "Tercan", Nationality: "Turkey"}

// Rest Operator
const sumUp = (a, b, ...numbers) => {
  let sum = a + b;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(sumUp(1, 2, 3, 4, 5, 6)); // => 21

// Recursion
function powerOf(x, n) {
  return n == 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

// Default Parameter
function defaultParameter(x, y = 5) {
  console.log(x * y);
}

defaultParameter(5, 10);  // 50
defaultParameter(5);      // 25

// Automatic Function
(function autoFunc(x, y) {
  console.log(x * y);
})(5, 10); // 50
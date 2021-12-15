/* eslint-disable no-empty */
/* eslint-disable no-prototype-builtins */
/* eslint-disable getter-return */
/* eslint-disable no-unused-vars */

// Inner Object
var person = {
  firstName: "Serhat",
  lastName: "Mercan",
  age: function (iYear) {
    return iYear - 1994;
  },
};
console.log(
  person.firstName + " " + person.lastName + " age is " + person.age(2020)
); // Serhat Mercan age is 26

// Loop
var personSM = {
  fname: "Serhat",
  lname: "Mercan",
  age: 25,
};
var text = "";
for (var i in personSM) {
  text += personSM[i] + " "; // "Serhat Mercan 25 "
}

// Call Method
var person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var person2 = {
  firstName: "Serhat",
  lastName: "Mercan",
};
person1.fullName.call(person2); // "Serhat Mercan"

// Define an Object => Default - Get - Set
var obj = {
  counter: 0,
};
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});

obj.add = 10; // obj.counter = 10
obj.increment; // obj.counter = 11
obj.reset; // obj.counter = 0

// Constructor
function getPerson(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

let myFather = new getPerson("Mehmet", "Mercan", 62, "brown");
let myMother = new getPerson("Fatma", "Mercan", 53, "brown");

// Prototypes - 1
getPerson.prototype.nationality = "Turkey"; // myFather.nationality => "Turkey"
getPerson.prototype.fullname = function () {
  return this.firstName + " " + this.lastName; // myMother.fullname() => Fatma Mercan
};

// Prototypes - 2
let user = {
  name: "Serhat",
  surname: "Mercan",
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return console.log(this.name + " " + this.surname);
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName);

// Return Array Object
getObject = () => {
  return {
    id: "",
    name: "",
  };
};

// Computed Properties
var prop = "Name";
var objProp = {
  [prop]: "Serhat",
};
objProp.Name; // Serhat

// Assign
let userAssign = {
  Name: "Serhat",
};

Object.assign(userAssign, {
  Surname: "Mercan",
}); // {Name: "Serhat", Surname: "Mercan"}

// Assign: Copy Object w/out Reference
let objAssign = {
  "name": "Serhat",
  "notes": [],
};

let copyObj = Object.assign({}, objAssign);

// Copy Object
let data = { age: 26 };
let copyData = { ...data };

// Copy Array in Object w/out Reference
let objCopy = {
  "name": "Serhat",
  "notes": [],
};

let copyObjX = {
  ...objCopy,
  "notes": obj.notes
};

// METHODS
var personX = {
  firstName: "Serhat",
  lastName: "Mercan",
  language: "TR",
};

// Method: Changing a Property Value
Object.defineProperty(personX, "language", {
  value: "EN",
}); // person => {firstName: "Serhat", lastName: "Mercan", language: "EN"}

// Method: Adding a Property
Object.defineProperty(personX, "country", {
  value: "Turkey",
}); // person => {firstName: "Serhat", lastName: "Mercan", language: "EN", country: "Turkey"}

// Method: Adding Getters & Setters
Object.defineProperty(personX, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
}); // person.fullname => Serhat Mercan

// Method: Get Values To Array
Object.values(personX); // ["Serhat", "Mercan", "TR"]

// Method: Returns all properties as an array
Object.getOwnPropertyNames(personX); // ["firstName", "lastName", "language", "country", "fullName"]

// Method: Accessing the prototype
Object.getPrototypeOf(personX); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, ...}

// Method: Entries
let prices = {
  Banana: 1,
  Orange: 2,
  Meat: 4,
};

let aDoublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
/*
aDoublePrices => {
  Banana: 2,
  Orange: 4,
  Meat: 8
}
*/

// Check Object Contains Property
if(obj.hasOwnProperty("ID")){}
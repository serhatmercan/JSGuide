// Fundamentals: Core JavaScript concepts not tied to a single data type or API.

// =====================
// Scope
// =====================
const sGlobalName = "Serhat"; // Global scope - accessible everywhere in this file

function showScope() {
    const sLocalName = "Mercan"; // Function scope - only accessible inside showScope
    console.log(sGlobalName, sLocalName);
}

if (true) {
    let sBlockName = "Block"; // Block scope - only accessible inside this { } block
    console.log(sBlockName);
}

// =====================
// Hoisting
// =====================
console.log(sVarValue); // => undefined (declaration is hoisted, value is not)
var sVarValue = "Hoisted";

// console.log(sLetValue); // => ReferenceError: Cannot access before initialization (Temporal Dead Zone)
let sLetValue = "Not Hoisted The Same Way";

hoistedFunction(); // => Works: function declarations are fully hoisted

function hoistedFunction() {
    console.log("I am hoisted!");
}

// =====================
// Closures
// =====================
function createCounter() {
    let iCount = 0; // Captured by the returned function below

    return function increment() {
        iCount++;
        return iCount;
    };
}

const fnCounter = createCounter();
fnCounter(); // => 1
fnCounter(); // => 2

// =====================
// this
// =====================
const oPerson = {
    Name: "Serhat",
    sayHello() {
        return `Hello, ${this.Name}`; // `this` refers to oPerson here
    },
    sayHelloArrow: () => {
        return `Hello, ${this.Name}`; // Arrow functions have no own `this` - inherits from surrounding scope
    }
};

oPerson.sayHello();      // => "Hello, Serhat"
oPerson.sayHelloArrow(); // => "Hello, undefined" (no `Name` on the outer `this`)

// =====================
// Prototype Chain
// =====================
function Car(sName) {
    this.Name = sName;
}

Car.prototype.present = function () {
    return `I have a ${this.Name}`;
};

const oCar = new Car("Opel");
oCar.present();                          // => "I have a Opel"
Object.getPrototypeOf(oCar) === Car.prototype; // => true

// =====================
// Equality & Type Coercion
// =====================
0 == "0";   // => true  (loose equality coerces types)
0 === "0";  // => false (strict equality, no coercion)
null == undefined;  // => true
null === undefined; // => false
NaN === NaN; // => false
Object.is(NaN, NaN); // => true

// =====================
// Shallow Copy vs Deep Copy
// =====================
const oOriginal = { ID: 1, Address: { City: "İstanbul" } };

const oShallowCopy = { ...oOriginal };
oShallowCopy.Address.City = "Ankara"; // Also changes oOriginal.Address.City - nested objects are shared

const oDeepCopy = JSON.parse(JSON.stringify(oOriginal)); // Deep copy - safe for JSON-serializable data only

// =====================
// Event Loop (Microtasks vs Macrotasks)
// =====================
console.log("1: Synchronous");

setTimeout(() => console.log("4: Macrotask (setTimeout)"), 0);

Promise.resolve().then(() => console.log("3: Microtask (Promise)"));

console.log("2: Synchronous");

// Output order => 1, 2, 3, 4 : microtasks (Promises) always run before the next macrotask (setTimeout)

// =====================
// WeakMap & WeakSet
// =====================
// Keys must be objects, and are garbage-collected when no other reference to the key exists
const oWeakMap = new WeakMap();
const oKeyObject = {};

oWeakMap.set(oKeyObject, "Some Metadata");
oWeakMap.get(oKeyObject); // => "Some Metadata"

const oWeakSet = new WeakSet();
oWeakSet.add(oKeyObject);
oWeakSet.has(oKeyObject); // => true

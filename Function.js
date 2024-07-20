// The Arguments Object
const calculateTotal = (...args) => args.reduce((iSum, iValue) => iSum + iValue, 0);

calculateTotal(5, 10, 15, 20); // => 50

// Call & Apply
const oPerson = {
  FullName(sCity, sCountry) {
    return `${this.FirstName} ${this.LastName}, ${sCity}, ${sCountry}`;
  }
};
const oPersonX = {
  FirstName: "Serhat",
  LastName: "Mercan",
};

oPerson.FullName.call(oPersonX, "İstanbul", "Turkey");    // => "Serhat Mercan,İstanbul,Turkey"
oPerson.FullName.apply(oPersonX, ["İstanbul", "Turkey"]); // => "Serhat Mercan,İstanbul,Turkey"

// Function Binding
const oUser = {
  Name: "Serhat",
};

sayHello = sValue => console.log(sValue + " " + this.Name);

sayHello.bind(oUser)("Hello"); // Hello Serhat

// Default Parameters
getPersonInformations = (sFirstName, sLastName, sUserName = "SMERCAN") => console.log(`${sFirstName} ${sLastName} ${sUserName}`);
getPersonInformations("Serhat", "Mercan");             // => Serhat Mercan SMERCAN             
getPersonInformations("Serhat", "Mercan", "XSMERCAN"); // => Serhat Mercan XSMERCAN

// Rest Operator
const sumUp = (iValueI, iValueII, ...aNumbers) => aNumbers.reduce((iSum, iValue) => iSum + iValue, iValueI + iValueII);

sumUp(1, 2, 3, 4, 5, 6); // => 21

// Recursion
const powerOf = (x, n) => n === 1 ? x : x * powerOf(x, n - 1);

console.log(powerOf(2, 3)); // => 8

// Automatic Function
((x, y) => console.log(x * y))(5, 10); // 50
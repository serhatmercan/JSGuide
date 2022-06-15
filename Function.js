/* eslint-disable no-unused-vars */
// The Arguments Object
function calculateTotal() {
  let iSum = 0;

  for (let i = 0; i < arguments.length; i++) {
    iSum += arguments[i];
  }

  return iSum;
}

calculateTotal(5, 10, 15, 20); // => 50

// CALL & APPLY
const oPerson = {
  FullName: function (sCity, sCountry) {
    return this.FirstName + " " + this.LastName + "," + sCity + "," + sCountry;
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
getPersonInformations = (sFirstName, sLastName, sUserName = "SMERCAN") => console.log(sFirstName + " " + sLastName  + " " + sUserName);
getPersonInformations("Serhat","Mercan");             // => Serhat Mercan SMERCAN             
getPersonInformations("Serhat","Mercan", "XSMERCAN"); // => Serhat Mercan XSMERCAN

// Rest Operator
sumUp = (iValueI, iValueII, ...aNumbers) => {
  let iSum = iValueI + iValueII;

  iSum = aNumbers.reduce((iSum, oCurrent) => iSum + oCurrent, iSum); 

  return iSum;
};

console.log(sumUp(1, 2, 3, 4, 5, 6)); // => 21

// Recursion
function powerOf(x, n) {
  return n == 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // => 8

// Automatic Function
(function autoFunc(x, y) {
  console.log(x * y);
})(5, 10); // 50
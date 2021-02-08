// Attributes
const userID = "123";

const person = {
    name: "Serhat",
    age: 26,
    city: "İstanbul"
};

const JSONData = JSON.stringify(person); // Send Data	=> "{"name":"Serhat","age":26,"city":"İstanbul"}"
JSON.parse(JSONData); // Display Data As Object

// Local Storage
localStorage.setItem("data", JSONData); // Store Data 
localStorage.getItem("data");           // Retrieve Data
localStorage.removeItem("data");        // Delete Data

// Session Storage
sessionStorage.setItem("uid", userID);  // Store Data
sessionStorage.getItem(userID);         // Retrieve Data

// Cookie
document.cookie = "User ID : " + userID;    // Store Data
console.log(document.cookie);               // Retrieve Data

// Indexed DB
let db;
const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.onsuccess = function (event) {
    db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
    db = event.target.result;

    const objStore = db.createObjectStore("products", { keyPath: "id" });

    objStore.transaction.oncomplete = function () {
        const productsStore = db
            .transaction("products", "readwrite")
            .objectStore("products");
        productsStore.add({
            id: "p1",
            title: "A First Product",
            price: 12.99,
        });
    };
};

dbRequest.onerror = function () {
    console.log("ERROR!");
};

// Reach Indexed DB
let productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");

// Add Item to Indexed DB
productsStore.add({
    id: "p2",
    title: "A Second Product",
    price: 122.99,
});

productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");

// Get Item From Indexed DB
const request = productsStore.get("p2");

request.onsuccess = function () {
    console.log(request.result);
};

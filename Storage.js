// Attributes
const sUserID = "123";

const oPerson = {
    Name: "Serhat",
    Age: 28,
    City: "İstanbul"
};

const JSONData = JSON.stringify(oPerson); // Send Data	=> "{"name":"Serhat","age":26,"city":"İstanbul"}"

JSON.parse(JSONData); // Display Data As Object

// Local Storage
localStorage.setItem("Data", JSONData); // Store Data 
localStorage.getItem("Data");           // Retrieve Data
localStorage.removeItem("Data");        // Delete Data

// Session Storage
sessionStorage.setItem("UID", sUserID);  // Store Data
sessionStorage.getItem(sUserID);         // Retrieve Data

// Cookie
document.cookie = "User ID : " + sUserID;    // Store Data
console.log(document.cookie);                // Retrieve Data

// Indexed DB
let oDB;
const oDBRequest = indexedDB.open("StorageDummy", 1);

oDBRequest.onsuccess = (oEvent) => oDB = oEvent.target.result;
oDBRequest.onerror = () => console.log("ERROR!");

oDBRequest.onupgradeneeded = function (oEvent) {
    oDB = oEvent.target.result;

    const oStore = oDB.createObjectStore("Products", { keyPath: "ID" });

    oStore.transaction.oncomplete = function () {
        const oProductsStore = oDB.transaction("Products", "readwrite").objectStore("Products");

        oProductsStore.add({
            ID: "PI",
            Title: "A First Product",
            Price: 12.99,
        });
    };
};

// Reach Indexed DB
let oProductsStore = oDB.transaction("Products", "readwrite").objectStore("Products");

// Add Item to Indexed DB
oProductsStore.add({
    ID: "PII",
    Title: "A Second Product",
    Price: 122.99,
});

oProductsStore = oDB.transaction("Products", "readwrite").objectStore("Products");

// Get Item From Indexed DB
const oRequest = oProductsStore.get("PII");

oRequest.onsuccess = () => console.log(oRequest.result);


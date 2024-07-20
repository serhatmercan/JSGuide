// Attributes
const sUserID = "123";
const oPerson = {
    Name: "Serhat",
    Age: 28,
    City: "İstanbul"
};

// Send Data
const JSONData = JSON.stringify(oPerson); // => "{"name":"Serhat","age":26,"city":"İstanbul"}"

// Display Data as Object
JSON.parse(JSONData);

// Local Storage
// Store Data 
localStorage.setItem("Data", JSONData);

// Retrieve Data
localStorage.getItem("Data");

// Delete Data
localStorage.removeItem("Data");

// Session Storage
// Store Data
sessionStorage.setItem("UID", sUserID);

// Retrieve Data
sessionStorage.getItem(sUserID);

// Cookie
// Store Data
document.cookie = `UserID=${sUserID}; path=/;`;

// Retrieve Data
document.cookie;

// Indexed DB
let oDB;
const oDBRequest = indexedDB.open("StorageDummy", 1);

oDBRequest.onsuccess = oEvent => oDB = oEvent?.target?.result;
oDBRequest.onerror = () => console.log("Error!");

oDBRequest.onupgradeneeded = oEvent => {
    oDB = oEvent?.target?.result;

    const oStore = oDB?.createObjectStore("Products", { keyPath: "ID" });

    oStore?.transaction?.oncomplete = () => {
        const oProductsStore = oDB?.transaction("Products", "readwrite").objectStore("Products");
        oProductsStore?.add({ ID: "PI", Title: "A First Product", Price: 12.99 });
    };
};

// Reach Indexed DB
if (!oDB) return;

const oProductsStore = oDB?.transaction("Products", "readwrite").objectStore("Products");

if (!oProductsStore) return;

const oProduct = { ID: "PII", Title: "A Second Product", Price: 122.99 };
const addProduct = (oProduct) => {
    oProductsStore?.add(oProduct);
};
const getProduct = (sID) => {
    const oRequest = oProductsStore?.get(sID);
    oRequest?.onsuccess = () => console.log(oRequest.result);
};

// Add Item to IndexedDB
addProduct(oProduct);

// Get Item From Indexed DB
getProduct("PII");
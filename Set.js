// Set
// Create Set
const oDataSet = new Set(["Serhat", "Mercan", 26]);

// Add Item
oDataSet.add("Software Engineer");

// Check Item
oDataSet.has(26); // => true

// Delete Item
oDataSet.delete(26); // => true

// List Items
oDataSet.forEach(oData => console.log(oData));

// Methods
const aData = Array.from(oDataSet);

// Get Unique Items In Array Object
const aArrayObjects = [
    { ID: 1, Name: "Serhat" },
    { ID: 2, Name: "Mercan" },
    { ID: 1, Name: "Serhat" }
];
const aUniqueIDs = [...new Set(aArrayObjects.map(oData => oData.ID))];

console.log(aData);      // => ["Serhat", "Mercan", "Software Engineer"]
console.log(aUniqueIDs); // => [1, 2]
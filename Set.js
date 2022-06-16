/* eslint-disable no-unused-vars */

// SET
// Create Set
const aData = new Set(["Serhat", "Mercan", 26]);

// Add Item
aData.add("Software Engineer");

// Check Item
aData.has(26); // => True

// Delete Item
aData.delete(26); // => True

// List Items
aData.forEach(oData => console.log(oData));

// SET: Methods
// Get Unique Items In Array
Array.from(new Set(aData));

// Get Unique Items In Array Object
aIDs = [...new Set(aData.map(oData => oData.ID))];

/* eslint-disable no-unused-vars */
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

fnUnique = (data) => {
	return Array.from(new Set(data));
};

console.log(fnUnique(values)); // ["Hare", "Krishna", ":-O"]

// Create a Set
const data = new Set(["Serhat", "Mercan", 26]);

// Add Item to Set
data.add("Software Engineer");

// Delete Item From Set
if (data.has(26)) {
	data.delete(26);
}

// List Item of Set
for (const item of data.entries()) {
	console.log(item[0]);
}

// Map & Set
let aColumnIDs = [...new Set(aData.map(item => item.ID))];
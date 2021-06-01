// Create a Map
const mapData1 = { id: 1 };
const mapData2 = { id: 2 };

const mapData = new Map([[mapData1, [{ key: "Amount1", price: 100 }]]]);

// Add Data to Map
mapData.set(mapData2, [{ key: "Amount2", price: 250 }]);

// List Map
for (const [key, value] of mapData.entries()) {
	console.log(key, value);
}

// List Map's Key
for (const key of mapData.keys()) {
	console.log(key);
}

// List Map's Value
for (const value of mapData.values()) { 
	console.log(value); 
}

// Size of Map
mapData.size; // => 2
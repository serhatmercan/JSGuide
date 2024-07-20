// Create a Map
const oMapDataI = { ID: 1 };
const oMapDataII = { ID: 2 };
const oMapData = new Map([[oMapDataI, [{ Key: "Amount", Price: 100 }]]]);

// Add Data to Map
oMapData.set(oMapDataII, [{ Key: "Amount2", Price: 250 }]);

// List Map
for (const [key, value] of oMapData) {
	console.log(key, value);
}

// List Map's Keys
for (const sKey of oMapData.keys()) {
	console.log(sKey);
}

// List Map's Values
for (const sValue of oMapData.values()) {
	console.log(sValue);
}

// Size of Map
oMapData.size; // => 2
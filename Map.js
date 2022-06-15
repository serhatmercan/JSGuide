// Create a Map
const oMapDataI = { ID: 1 };
const oMapDataII = { ID: 2 };
const oMapData = new Map([[oMapDataI, [{ Key: "Amount", Price: 100 }]]]);

// Add Data to Map
oMapDataI.set(oMapDataII, [{ Key: "Amount2", Price: 250 }]);

// List Map
for (let [key, value] of oMapData.entries()) {
	console.log(key, value);
}

// List Map's Key
for (let sKey of oMapData.keys()) {
	console.log(sKey);
}

// List Map's Value
for (let sValue of oMapData.values()) { 
	console.log(sValue); 
}

// Size of Map
oMapData.size; // => 2
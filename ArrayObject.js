// Definition
let aData = [
  { Key: "1", Value: 10 },
  { Key: "2", Value: 100 }
];

// Array Object: Change All Objects Data
aData.map(oData => ({
  ...oData,
  Item: oData.Item
}));

// Array Object: Check Duplicate Objects In Array w/ Two Fields
checkDuplicate = (aData) => {
  const xData = new Set();
  return aData.some(({ FieldI, FieldII }) => {
    const sKey = `${FieldI}-${FieldII}`;
    return xData.has(sKey) ? true : (xData.add(sKey), false);
  });
};

// Array Object: Check Duplicate Objects In Array
const checkDuplicateObjectsInArray = (aData) => {
  const aUniqueData = aData.filter((v, i, a) => a.findIndex(t => t.Key === v.Key && t.Value === v.Value) === i);
  return aData.length !== aUniqueData.length;
};

// Array Object: Delete Attribute
aData.map(oItem => {
  delete oItem.Value;
  return oItem;
});

// Array Object: Delete Duplicate Object Field
aUniqueData = aFullData.reduce((aData, oCurrent) => {
  if (!aData.some(oData => oData.Pltyp === oCurrent.Pltyp)) {
    aData.push(oCurrent);
  }
  return aData;
}, []);

// Array Object: Delete Reference
const aCopiedData = JSON.parse(JSON.stringify(aData));

// Array Object: Every
aData.every(oData => oData.Value > 1);  // => True 
aData.every(oData => oData.Value > 10); // => False 

// Array Object: Filter & Includes
aData.filter(oData => oData.Value.includes("1"));

// Array Object: Find Index
aData.findIndex(oData => oData.Key === "2"); // 1
aData.findIndex(oData => oData.Key === "2" || oData.Value === 100); // 1

// Array Object: Group I
const aGroupedData = aData.reduce((aGroups, oData) => {
  const { Key } = oData;

  aGroups[Key] = aGroups[Key] ?? [];
  aGroups[Key].push(oData);

  return aGroups;
}, {});

// Array Object: Group II
aData.reduce((aGroups, oData) => {
  (aGroups[oData.Key] = aGroups[oData.Key] || []).push(oData);
  return aGroups;
}, {});

// Array Object: Map - Change Keys
const aMappedData = aData.map(oItem => ({
  ID: oItem.Key,
  Value: oItem.Value,
}));

// Array Object: Reduce - Calculate Total Value - 0: Initial Value
const iTotalValue = aData.reduce((iSum, oCurrent) => iSum + oCurrent.Value, 0); // => 110

// Array Object: Remove Duplicate Objects
const aUniqueObjects = aData.map(oData => ({ ID: oData.ID, Value: oData.Value })).filter((v, i, a) => a.findIndex(t => t.ID === v.ID) === i);

// Array Object: Some
aData.some((oData) => oData.Value > 1);   // => True 
aData.some((oData) => oData.Value > 100); // => False

// Array Object: Sort
aData.sort((a, b) => a.Value.localeCompare(b.Value));

// Array Object: Unique Array
const xGroupedData = aData.reduce((oData, oItem) => {
  oData[oItem.Key] = [...oData[oItem.Key] || [], oItem];
  return x;
}, {});

Object.getOwnPropertyNames(xGroupedData);

// Example: Filter & Map & Reduce
const aMercans = [
  { ID: 1, Name: "Serhat", Surname: "Mercan", Score: 75 },
  { ID: 2, Name: "Elif", Surname: "Mercan", Score: 100 },
  { ID: 3, Name: "Selim", Surname: "Mercan", Score: 100 }
];
const iCount = aMercans.reduce((iTotal, { Surname, ID }) => {
  if (Surname === "Mercan") {
    return iTotal + ID + 1;
  }
  return iTotal;
}, 0); // Return 9
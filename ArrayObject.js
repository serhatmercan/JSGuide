// Array Object
let xData = [
  {
    Key: "1",
    Value: 10,
  },
  {
    Key: "2",
    Value: 100,
  }
];

// Array Object: Change All Objects Data
xData.map(oData => ({
  ...oData,
  Item: oData.Item
}));

// Array Object: Check Duplicate Objects In Array
checkDuplicateObjectsInArray = (aData) => {
  let aTable = aData.map(oItem => {
    return {
      Key: oItem.Key,
      Value: oItem.Value
    };
  });
  let aXTable = aData.map(oItem => {
    return {
      Key: oItem.Key,
      Value: oItem.Value
    };
  }).filter((v, i, a) => a.findIndex(t => (t.Key === v.Key && t.Value === v.Value)) === i);

  return aTable.length !== aXTable.length;
};

// Array Object: Delete Attribute
xData.map(oItem => {
  delete oItem.Value;
  return oItem;
});

// Array Object: Every
xData.every(oData => oData.Value > 1);  // => True 
xData.every(oData => oData.Value > 10); // => False 

// Array Object: Filter & Includes
xData.filter(oData => oData.Value.includes("1"));

// Array Object: Find Index
xData.findIndex(oData => oData.Key === "2"); // 1
xData.findIndex(oData => oData.Key === "2" || oData.Value === 100); // 1

// Array Object: Group I
aData.reduce((aGroups, oData) => {
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
xData.map(oItem => {
  return {
    ID: oItem.Key,
    Value: oItem.Value,
  };
});

// Array Object: Reduce - Calculate Total Value - 0: Initial Value
xData.reduce((iSum, oCurrent) => iSum + oCurrent.Value, 0); // => 110

// Array Object: Remove Duplicate Objects
xData.map(oData => {
  return {
    ID: oData.ID,
    Value: oData.Value
  };
}).filter((v, i, a) => a.findIndex(t => (t.ID === v.ID)) === i);

// Array Object: Some
xData.some((oData) => oData.Value > 1);   // => True 
xData.some((oData) => oData.Value > 100); // => False

// Array Object: Sort
xData.sort((oDataI, oDataII) => {
  return oDataI.Value.localeCompare(oDataII.Value);
});

// Array Object: Unique Array
const xGroupedData = xData.reduce((oData, oItem) => {
  oData[oItem.Key] = [...oData[oItem.Key] || [], oItem];
  return x;
}, {});

Object.getOwnPropertyNames(xGroupedData);

// Example: Filter & Map & Reduce
const aMercans = [{
  ID: 1,
  Name: "Serhat",
  Surname: "Mercan",
  Score: 75
}, {
  ID: 2,
  Name: "Elif",
  Surname: "Mercan",
  Score: 100
}, {
  ID: 3,
  Name: "Selim",
  Surname: "Mercan",
  Score: 100
}];

aMercans.filter(oMercan => oMercan.Surname === "Mercan").map(oItem => oItem.ID += 1).reduce((iTotal, iID) => iTotal + iID, 0); // Return 9
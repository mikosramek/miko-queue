const fs = require('fs');
const path = require('path');
const baseList = require('../src/data/allItems.json');



const newMap = {};

const items = baseList.items;

items.forEach((item) => {
  const id = item.id;
  newMap[id] = item;
});


fs.writeFileSync(path.resolve(__dirname, 'newItemMap.json'), JSON.stringify(newMap, null, 2));

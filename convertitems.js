const createCsvWrite = require('csv-writer').createObjectCsvWriter;
let championData = require('/Users/matchewxd/work/leaguedata/dragontail-12.6.1/12.6.1/data/en_US/item.json');
const csvWriter = createCsvWrite({
  path: 'items.csv',
  header: [
    { id: 'id', title: 'Id' },
    { id: 'name', title: 'Name' },
    { id: 'description', title: 'Description' },
    { id: 'plaintext', title: 'PlainText' },
    { id: 'image', title: 'Image' },
    { id: 'gold', title: 'Gold' },
    { id: 'tags', title: 'Tags' },
    { id: 'id', title: 'Id' },
    { id: 'id', title: 'Id' },
  ]
});
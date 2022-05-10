const createCsvWrite = require('csv-writer').createObjectCsvWriter;
let championData = require('/Users/matchewxd/work/leaguedata/dragontail-12.6.1/12.6.1/data/en_US/championFull.json'); // Change file path on update
const csvWriter = createCsvWrite({
  path: 'champions.csv',
  header: [
    { id: 'id', title: 'Id' },
    { id: 'key', title: 'Key' },
    { id: 'name', title: 'Name' },
    { id: 'image', title: 'Image' },
    { id: 'class', title: 'Class' },
    { id: 'hp', title: 'Hp' },
    { id: 'hplvl', title: 'Hplvl' },
    { id: 'mp', title: 'Mp' },
    { id: 'mplvl', title: 'Mplvl' },
    { id: 'movespeed', title: 'Movespeed' },
    { id: 'armor', title: 'Armor' },
    { id: 'armorlvl', title: 'Armorlvl' },
    { id: 'spellblock', title: 'Spellblock' },
    { id: 'spellblocklvl', title: 'Spellblocklvl' },
    { id: 'attackrange', title: 'Attackrange' },
    { id: 'hpregen', title: 'Hpregen' },
    { id: 'hpregenlvl', title: 'Hpregenlvl' },
    { id: 'mpregen', title: 'Mpregen' },
    { id: 'mpregenlvl', title: 'Mpregenlvl' },
    { id: 'crit', title: 'Crit' },
    { id: 'critlvl', title: 'Critlvl' },
    { id: 'attackdamage', title: 'Attackdamage' },
    { id: 'attackdamagelvl', title: 'Attackdamagelvl' },
    { id: 'attackspeed', title: 'Attackspeed' },
    { id: 'attackspeedlvl', title: 'Attackspeedlvl' },
  ]
});

var convertData = function (data) {
  var champions = [];

  for (var key in data) {
    champions.push({
      id: data[key]['id'],
      key: data[key]['key'],
      name: data[key]['name'],
      image: data[key]['image']['full'],
      class: data[key]['tags'][0],
      hp: data[key]['stats']['hp'],
      hplvl: data[key]['stats']['hpperlevel'],
      mp: data[key]['stats']['mp'],
      mplvl: data[key]['stats']['mpperlevel'],
      movespeed: data[key]['stats']['movespeed'],
      armor: data[key]['stats']['armor'],
      armorlvl: data[key]['stats']['armorperlevel'],
      spellblock: data[key]['stats']['spellblock'],
      spellblocklvl: data[key]['stats']['spellblockperlevel'],
      attackrange: data[key]['stats']['attackrange'],
      hpregen: data[key]['stats']['hpregen'],
      hpregenlvl: data[key]['stats']['hpregenperlevel'],
      mpregen: data[key]['stats']['mpregen'],
      mpregenlvl: data[key]['stats']['mpregenperlevel'],
      crit: data[key]['stats']['crit'],
      critlvl: data[key]['stats']['critperlevel'],
      attackdamage: data[key]['stats']['attackdamage'],
      attackdamagelvl: data[key]['stats']['attackdamageperlevel'],
      attackspeed: data[key]['stats']['attackspeed'],
      attackspeedlvl: data[key]['stats']['attackspeedperlevel']
    });
  }
  return champions;
}

var data = convertData(championData.data);

csvWriter
  .writeRecords(data)
  .then(() => console.log('The CSV file has been written successfully'));
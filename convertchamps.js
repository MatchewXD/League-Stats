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
    { id: 'qid', title: 'Qid' },
    { id: 'qname', title: 'Qname' },
    { id: 'qdesc', title: 'Qdesc' },
    { id: 'qtip', title: 'Qtip' },
    { id: 'qimage', title: 'Qimage' },
    { id: 'wid', title: 'Wid' },
    { id: 'wname', title: 'Wname' },
    { id: 'wdesc', title: 'Wdesc' },
    { id: 'wtip', title: 'Wtip' },
    { id: 'wimage', title: 'Wimage' },
    { id: 'eid', title: 'Eid' },
    { id: 'ename', title: 'Ename' },
    { id: 'edesc', title: 'Edesc' },
    { id: 'etip', title: 'Etip' },
    { id: 'eimage', title: 'Eimage' },
    { id: 'rid', title: 'Rid' },
    { id: 'rname', title: 'Rname' },
    { id: 'rdesc', title: 'Rdesc' },
    { id: 'rtip', title: 'Rtip' },
    { id: 'rimage', title: 'Rimage' },
    { id: 'pname', title: 'Pname' },
    { id: 'pdesc', title: 'Pdesc' },
    { id: 'pimage', title: 'Pimage' },
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
      qid: data[key]["spells"][0]['id'],
      qname: data[key]["spells"][0]['name'],
      qdesc: data[key]["spells"][0]['description'],
      qtip: data[key]["spells"][0]['tooltip'],
      qimage: data[key]["spells"][0]['image']['full'],
      wid: data[key]["spells"][1]['id'],
      wname: data[key]["spells"][1]['name'],
      wdesc: data[key]["spells"][1]['description'],
      wtip: data[key]["spells"][1]['tooltip'],
      wimage: data[key]["spells"][1]['image']['full'],
      eid: data[key]["spells"][2]['id'],
      ename: data[key]["spells"][2]['name'],
      edesc: data[key]["spells"][2]['description'],
      etip: data[key]["spells"][2]['tooltip'],
      eimage: data[key]["spells"][2]['image']['full'],
      rid: data[key]["spells"][3]['id'],
      rname: data[key]["spells"][3]['name'],
      rdesc: data[key]["spells"][3]['description'],
      rtip: data[key]["spells"][3]['tooltip'],
      rimage: data[key]["spells"][3]['image']['full'],
      pname: data[key]['passive']['name'],
      pdesc: data[key]['passive']['description'],
      pimage: data[key]['passive']['image']['full'],
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
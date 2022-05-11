const createCsvWrite = require('csv-writer').createObjectCsvWriter;
let itemData = require('/Users/matchewxd/work/leaguedata/dragontail-12.6.1/12.6.1/data/en_US/item.json');
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
    { id: 'stats', title: 'Stats' },
  ]
});

var convertData = function (data) {
  var items = [];

  for (var key in data) {
    var getTags = function (k, d) {
      var results = '';
      for (var i = 0; i < d[k]['tags'].length; i++) {
        var cTag = d[k]['tags'][i];
        if (i === d[k]['tags'].length - 1) {
          results += cTag;
        } else {
          results += cTag + " ";
        }
      }
      return results;
    }

    var getStats = function (k, d) {
      var results = '';
      var statString = d[k]['description'];
      var start = false;
      var allStats = {
        'Attack Damage': 'ad',
        'Ability Power': 'ap',
        'Attack Speed': 'as',
        'Critical Strike Chance': 'cs',
        'Health': 'hp',
        'Armor': 'ar',
        'Magic Resist': 'mr',
        'Mana': 'mp',
        'Ability Haste': 'ah',
        'Move Speed': 'ms',
        'Life Steal': 'ls',
        'Base Health Regen': 'hpr',
        'Base Mana Regen': 'mpr',
        'Magic Penetration': 'mpen',
        'Armor Penetration': 'apen',
        'Omnivamp': 'vamp',
        'Heal and Shield Power': 'h&sp',
        'Tenacity': 'tnc',
        'Lethality': 'leth',
        'Gold Per 10 Seconds': 'gp10'
      }

      for (var i = 0; i < statString.length; i++) {
        var cLetter = statString[i];
        if (start) {
          if (cLetter === '<') {
            if (statString.substring(i, i + 8) === '</stats>') {
              break;
            }
            var j = i;
            while (statString[j] !== '>') {
              j++;
            }
            i = j;

          } else if (!isNaN(statString[i]) && cLetter !== " ") {

            var t = i;
            while (!isNaN(statString[t])) {
              t++;
            }
            results += statString.substring(i, t);
            i = t - 1;

          } else if (cLetter === ' ') {

            var h = i;
            while (statString[h] !== '<') {
              h++;
            }
            var stat = statString.substring(i + 1, h);
            if (allStats[stat] === undefined) {
              console.log(`allStats does not include ~${stat}~`);
            }
            results += allStats[stat];
            results += " ";
            i = h - 1;

          }
        } else if (cLetter === 's') {
          if (statString.substring(i, i + 5) === 'stats') {
            start = true;
            i = i + 5;
          }
        }
      }
      return results.substring(0, results.length - 1);
    }

    var tlist = getTags(key, data);
    var slist = getStats(key, data);

    items.push({
      id: key,
      name: data[key]['name'],
      description: data[key]['description'],
      plaintext: data[key]['plaintext'],
      image: data[key]['image']['full'],
      gold: data[key]['gold']['total'],
      tags: tlist,
      stats: slist
    });
  }
  return items;
}

var info = convertData(itemData.data);

csvWriter
  .writeRecords(info)
  .then(() => console.log('The CSV file has been written successfully'));
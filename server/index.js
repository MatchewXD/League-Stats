const express = require("express");
const app = express();
const port = 3001;
const getData = require('../database/getData.js');
// Temp - remove before going onlines
const cors = require('cors');
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.get('/', (req, res) => {
  console.log('/ was called');
  res.send('Welcome to "League Stats" Server!')
});

// Champions
app.get('/champions', (req, res) => {
  console.log("/Champions was called");
  getData.getChampions()
    .then((response) => {
      var data = response.rows;
      var champions = [];
      for (var i = 0; i < data.length; i++) {
        var cChamp = data[i];
        champions.push({
          "name": cChamp["name"],
          "id": cChamp["id"],
          "key": cChamp["key"],
          "image": cChamp["image"],
          "class": cChamp["class"],
          "spells": {
            "q": {
              "qid": cChamp["qid"],
              "qname": cChamp["qname"],
              "qdesc": cChamp["qdesc"],
              "qtip": cChamp["qtip"],
              "qimage": cChamp["qimage"]
            },
            "w": {
              "wid": cChamp["wid"],
              "wname": cChamp["wname"],
              "wdesc": cChamp["wdesc"],
              "wtip": cChamp["wtip"],
              "wimage": cChamp["wimage"]
            },
            "e": {
              "eid": cChamp["eid"],
              "ename": cChamp["ename"],
              "edesc": cChamp["edesc"],
              "etip": cChamp["etip"],
              "eimage": cChamp["eimage"]
            },
            "r": {
              "rid": cChamp["rid"],
              "rname": cChamp["rname"],
              "rdesc": cChamp["rdesc"],
              "rtip": cChamp["rtip"],
              "rimage": cChamp["rimage"]
            },
            "p": {
              "pname": cChamp["pname"],
              "pdesc": cChamp["pdesc"],
              "pimage": cChamp["pimage"]
            }
          },
          "Stats": {
            "hp": cChamp["hp"],
            "hplvl": cChamp["hplvl"],
            "mp": cChamp["mp"],
            "mplvl": cChamp["mplvl"],
            "movespeed": cChamp["movespeed"],
            "armor": cChamp["armor"],
            "armorlvl": cChamp["armorlvl"],
            "spellblock": cChamp["spellblock"],
            "spellblocklvl": cChamp["spellblocklvl"],
            "attackrange": cChamp["attackrange"],
            "hpregen": cChamp["hpregen"],
            "hpregenlvl": cChamp["hpregenlvl"],
            "mpregen": cChamp["mpregen"],
            "mpregenlvl": cChamp["mpregenlvl"],
            "crit": cChamp["crit"],
            "critlvl": cChamp["critlvl"],
            "attackdamage": cChamp["attackdamage"],
            "attackdamagelvl": cChamp["attackdamagelvl"],
            "attackspeed": cChamp["attackspeed"],
            "attackspeedlvl": cChamp["attackspeedlvl"]
          }
        });
      }
      res.send(champions);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/items', (req, res) => {
  console.log("/Items was called");
  getData.getItems()
    .then((response) => {
      var data = response.rows;
      var convertItems = function (arr) {
        var data = arr;
        var items = [];

        var sortStats = function (str) {
          var jsonStats = {};
          var strArr = str.split(' ');

          for (var j = 0; j < strArr.length; j++) {
            var cWord = strArr[j];
            for (var h = 0; h < cWord.length; h++) {
              var cLetter = cWord[h]
              if (isNaN(cLetter)) {
                var name = cWord.substring(h, cWord.length);
                var number = cWord.substring(0, h);
                jsonStats[name] = number;
                break;
              }
            }
          }
          return jsonStats;
        };

        for (var i = 0; i < data.length; i++) {
          var cItem = data[i];
          var cTags = {};
          if (cItem['tags']) {
            cTags = cItem['tags'].split(' ');
          }
          var cStats = {};
          if (cItem['stats']) {
            cStats = sortStats(cItem['stats']);
          }


          items.push({
            "id": cItem["id"],
            "name": cItem["name"],
            "description": cItem["description"],
            "plaintext": cItem["plaintext"],
            "image": cItem["image"],
            "gold": cItem["gold"],
            "tags": cTags,
            "stats": cStats
          });
        }
        return items;
      };
      var items = convertItems(data);
      res.send(items);
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Stats app listening on port ${port}`);
})
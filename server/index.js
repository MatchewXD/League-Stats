const express = require("express");
const app = express();
const port = 3000;
const getData = require('../database/getData.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to "League Stats" Server!')
});

// Champions
app.get('/champions', (req, res) => {
  getData.getChampions()
    .then((response) => {
      var data = response.rows;
      var champions = {};
      for (var i = 0; i < data.length; i++) {
        var cChamp = data[i];
        champions[cChamp["name"]] = {
          "id": cChamp["id"],
          "key": cChamp["key"],
          "image": cChamp["image"],
          "class": cChamp["class"],
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
        }
      }
      res.send(champions);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Stats app listening on port ${port}`);
})
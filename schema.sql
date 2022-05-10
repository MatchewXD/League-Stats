DROP TABLE IF EXISTS "champions" CASCADE;

CREATE TABLE "champions" (
  "id" VARCHAR(99),
  "key" INTEGER PRIMARY KEY,
  "name" VARCHAR(99),
  "image" VARCHAR(99),
  "class" VARCHAR(99),
  "hp" DECIMAL,
  "hplvl" DECIMAL,
  "mp" DECIMAL,
  "mplvl" DECIMAL,
  "movespeed" DECIMAL,
  "armor" DECIMAL,
  "armorlvl" DECIMAL,
  "spellblock" DECIMAL,
  "spellblocklvl" DECIMAL,
  "attackrange" DECIMAL,
  "hpregen" DECIMAL,
  "hpregenlvl" DECIMAL,
  "mpregen" DECIMAL,
  "mpregenlvl" DECIMAL,
  "crit" DECIMAL,
  "critlvl" DECIMAL,
  "attackdamage" DECIMAL,
  "attackdamagelvl" DECIMAL,
  "attackspeed" DECIMAL,
  "attackspeedlvl" DECIMAL
);

COPY champions(id, key, name, image, class, hp, hplvl, mp, mplvl, movespeed, armor, armorlvl, spellblock, spellblocklvl, attackrange, hpregen, hpregenlvl, mpregen, mpregenlvl, crit, critlvl, attackdamage, attackdamagelvl, attackspeed, attackspeedlvl)
FROM '/Users/matchewxd/work/personal/League-Stats/champions.csv'
DELIMITER ','
CSV HEADER;

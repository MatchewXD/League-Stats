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

DROP TABLE IF EXISTS "items" CASCADE;

CREATE TABLE "items" (
  "id" INTEGER,
  "name" VARCHAR(630),
  "description" VARCHAR(9999),
  "plaintext" VARCHAR(999),
  "image" VARCHAR(33),
  "gold" VARCHAR(90),
  "tags" VARCHAR(999),
  "stats" VARCHAR(999)
);

COPY items(id, name, description, plaintext, image, gold, tags, stats)
FROM '/Users/matchewxd/work/personal/League-Stats/items.csv'
DELIMITER ','
CSV HEADER;
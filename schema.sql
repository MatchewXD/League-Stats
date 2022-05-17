DROP TABLE IF EXISTS "champions" CASCADE;

CREATE TABLE "champions" (
  "id" VARCHAR(99),
  "key" INTEGER PRIMARY KEY,
  "name" VARCHAR(99),
  "image" VARCHAR(99),
  "class" VARCHAR(99),
  "qid" VARCHAR(99),
  "qname" VARCHAR(300),
  "qdesc" VARCHAR(3000),
  "qtip" VARCHAR(3000),
  "qimage" VARCHAR(300),
  "wid" VARCHAR(99),
  "wname" VARCHAR(300),
  "wdesc" VARCHAR(3000),
  "wtip" VARCHAR(3000),
  "wimage" VARCHAR(300),
  "eid" VARCHAR(99),
  "ename" VARCHAR(300),
  "edesc" VARCHAR(3000),
  "etip" VARCHAR(3000),
  "eimage" VARCHAR(300),
  "rid" VARCHAR(99),
  "rname" VARCHAR(300),
  "rdesc" VARCHAR(3000),
  "rtip" VARCHAR(3000),
  "rimage" VARCHAR(300),
  "pname" VARCHAR(300),
  "pdesc" VARCHAR(3000),
  "pimage" VARCHAR(300),
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

COPY champions(id, key, name, image, class, qid, qname, qdesc, qtip, qimage, wid, wname, wdesc, wtip, wimage, eid, ename, edesc, etip, eimage, rid, rname, rdesc, rtip, rimage, pname, pdesc, pimage, hp, hplvl, mp, mplvl, movespeed, armor, armorlvl, spellblock, spellblocklvl, attackrange, hpregen, hpregenlvl, mpregen, mpregenlvl, crit, critlvl, attackdamage, attackdamagelvl, attackspeed, attackspeedlvl)
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
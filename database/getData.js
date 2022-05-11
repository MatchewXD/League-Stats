const db = require('./index.js');

module.exports = {
  getChampions: () => {
    return db.pool.query(`SELECT * FROM champions;`);
  }
}
const mysql = require("mysql");
const util = require("util");
const Configuration = require("./configuration");
const config = new Configuration();

class Repository {
  constructor() {
    this._pool = mysql.createPool(config);
    this._queryAsync = util.promisify(this._pool.query).bind(this._pool);
  }

  async query(sql) {
    try {
      const results = await this._queryAsync(sql);
      return results;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Repository;

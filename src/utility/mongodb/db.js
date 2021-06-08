const MongoClient = require('mongodb').MongoClient;

const base = process.env.MONGO_DB_URL;
const user = process.env.MONGO_DB_USER;
const pw = process.env.MONGO_DB_PW;
const dbUrl = `mongodb+srv://${user}:${pw}${base}`;

class DB {
  constructor() {
    this.client = new MongoClient(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    this.cache = {};
  }
  storeInCache (key, value) {
    if (!this.cache[key]) {
      this.cache[key] = value;
    }
  }
  async queryDB(discordID) {
    if (this.cache[discordID]) return this.cache[discordID];
    try {
      await this.client.connect();
      const gw2 = this.client.db('gw2').collection('users');
      const entry = await gw2.find({ });
      const data = await entry.next();
      const { api_key } = data;
      if (!data || !api_key) {
        await this.client.close();
        return 'No api key found, please add it with subcommand \`storekey\`.';
      }
      else {
        this.storeInCache(discordID, api_key);
        await this.client.close();
        return api_key;
      }
    }
    catch (error) {
      console.error('db.js@queryDB:', error.message);
      await this.client.close();
      return error;
    }
    finally {
      await this.client.close();
    }
  }
}

module.exports = new DB();

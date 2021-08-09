const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const { sort } = require('../../utility/schedule-utils');

const base = process.env.MONGO_DB_URL;
const user = process.env.MONGO_DB_USER;
const pw = process.env.MONGO_DB_PW;
const dbUrl = `mongodb+srv://${user}:${pw}${base}`;

class DB {
  constructor() {
    this.client = new MongoClient(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    this.isQuerying = false;
  }

  async cleanUp() {
    if (this.isQuerying) return;
    if (this.client.isConnected()) await this.client.close();
    this.isQuerying = false;
  }

  async updateDB(documentID, key) {
    try {
      this.isQuerying = true;
      if (!this.client.isConnected()) await this.client.connect();
      const gw2 = this.client.db('gw2').collection('users');
      await gw2.updateOne(
        { _id : new ObjectID(documentID) },
        { $set : { api_key : key.toString() } },
        { upsert : false }
      );
    }
    catch (error) {
      console.error('db.js@updateDB:', error.message);
      return error;
    }
    finally {
      await this.cleanUp();
    }
  }

  async insertDocument(discordID, key) {
    try {
      this.isQuerying = true;
      if (!this.client.isConnected()) await this.client.connect();
      const gw2 = this.client.db('gw2').collection('users');
      await gw2.insertOne({
        discord_id : discordID.toString(),
        api_key : key.toString()
      });
    }
    catch (error) {
      console.error('db.js@insertDocument:', error.message);
      return error;
    }
    finally {
      await this.cleanUp();
    }
  }

  async queryDB(discordID, closeOnComplete = true) {
    try {
      this.isQuerying = true;
      if (!this.client.isConnected()) await this.client.connect();
      const gw2 = this.client.db('gw2').collection('users');
      const entry = await gw2.find({ "discord_id" : discordID });
      const data = await entry.next();
      const { api_key, _id } = data;

      if (!data || !api_key) {
        return 'No api key found, please add it with subcommand \`storekey\`.';
      }
      else {
        return {
          api_key,
          id : _id
        };
      }
    }
    catch (error) {
      console.error('db.js@queryDB:', error.message);
      return error;
    }
    finally {
      if (closeOnComplete) await this.cleanUp();
    }
  }

  async getSchedule() {
    try {
      this.isQuerying = true;
      if (!this.client.isConnected()) await this.client.connect();
      const events = this.client.db('schedule').collection('events');
      const data = await events.find({}).toArray();
      return sort(data);
    }
    catch (error) {
      console.error('db.js@getSchedule:', error.message);
      return error;
    }
    finally {
      this.isQuerying = false;
    }
  }
  async setSchedule(events) {
    try {
      this.isQuerying = true;
      if (!this.client.isConnected()) await this.client.connect();
      const dbEvents = this.client.db('schedule').collection('events');
      for (let i = 0; i < events.length; i += 1) {
        const { id = null, ...eventObject } = events[i];
        if (id) {
          await dbEvents.replaceOne({ _id: ObjectID(id) }, { ...eventObject }, { upsert : false });
        }
        else {
          await dbEvents.insertOne(eventObject);
        }
      }
    }
    catch (error) {
      console.error('db.js@getSchedule:', error.message);
      return error;
    }
    finally {
      this.isQuerying = false;
    }
  }
  async removeSchedule(id) {
     try {
      this.isQuerying = true;
      if (!this.client.isConnected()) await this.client.connect();
      const dbEvents = this.client.db('schedule').collection('events');
      await dbEvents.deleteOne({ _id : ObjectID(id) });
    }
    catch (error) {
      console.error('db.js@getSchedule:', error.message);
      return error;
    }
    finally {
      this.isQuerying = false;
    }
  }
}

module.exports = new DB();

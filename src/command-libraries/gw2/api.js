const axios = require('axios');
const db = require('../../utility/mongodb/db');

const api = {};

api['get-key'] = async function(_query, discordID) {
  try {
    const { api_key : key } = await db.queryDB(discordID.toString());
    if (!key) return new Error('Key not stored / can\'t be found');
    return `Your currently stored key: \`${key}\``;
  }
  catch (error) {
    console.error('api.js@storekey:', error.message);
    return error;
  }
}

api['store-key'] = async function(newKey, discordID) {
  // query should be API KEY HERE
  console.info({ newKey, discordID }, 'api.js@storekey');
  try {
    const { api_key : key, id : documentId } = await db.queryDB(discordID, false);
    console.info({ key }, 'api.js@storekey');
    if (key) {
      // so we have a key in the db

      // if it's already the one in there, no need to do anything
      if (key === newKey) {
        return 'This key has already been stored, no action performed.'
      }

      // now to test if it's real.
      // it needs to at least have access to account
      try {
        await axios.get(`https://api.guildwars2.com/v2/account?access_token=${newKey}`);
      }
      catch (error) {
        console.error('api.js@:', error.message);
        return 'Error: api key returned an error with the gw2 api'
      }

      // now to update
      await db.updateDB(documentId, newKey);
    }
    else {
      // we don't have a key stored, so we need to created a document
      await db.insertDocument(discordID, newKey);
    }
    return 'Success: api key stored';
  }
  catch (error) {
    console.error('api.js@storekey:', error.message);
    return error.message;
  }
};

module.exports = api;

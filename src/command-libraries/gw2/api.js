const db = require('../../utility/mongodb/db');

const api = {};

api.storekey = async function(query, discordID) {
  // query should be API KEY HERE
  console.info({ query, discordID }, 'api.js@storekey');
  try {
    await db.queryDB(discordID);
    return 'storekey';
  }
  catch (error) {
    console.error('api.js@storekey:', error.message);
    return error;
  }
};

module.exports = api;

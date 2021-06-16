const { timestamp } = require('../../utility/general-util');
const baseURL = process.env.EXPRESS_BASE_URL;

const pvp = {};

pvp['pvp-stats'] = async function(_query, discordID) {
  try {
    return `${baseURL}/image/gw2/pvp/${discordID}?${timestamp()}`;
  }
  catch (error) {
    console.error('pvp.js@stats:', error.message);
  }
}

module.exports = pvp;

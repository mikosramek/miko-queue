const pvp = {};

pvp['pvp-stats'] = async function(_query, discordID) {
  try {
    return `http://localhost:1234/image/gw2/pvp/${discordID}`;
  }
  catch (error) {
    console.error('pvp.js@stats:', error.message);
  }
}

module.exports = pvp;

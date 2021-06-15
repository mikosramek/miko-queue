
const { GW2_BASE } = require('../../settings.api');

const db = require('../../utility/mongodb/db');

const XHR = require('../../utility/xhr');
const Embed = require('../../utility/embed');
const { secondsToString } = require('../../utility/general-util');

const { WORLDS } = require('./static-data');

const player = {};

player.account = async function(_query, discordID) {
  try {
    const { api_key : key } = await db.queryDB(discordID);
    const response = await XHR.get(GW2_BASE, `account?access_token=${key}`);
    /*
      {
       id: 'ECC6A17F-0F69-E111-809D-78E7D1936EF0',
       name: 'TMG.1307',
       age: 3009480,
       world: 1008,
       guilds:
        [ 'DC63E776-4CA7-E411-BB46-80C16E7C6D65',
          '56F70B75-8AD0-E711-81A1-02A85B1FFC7A' ],
       guild_leader: [ '56F70B75-8AD0-E711-81A1-02A85B1FFC7A' ],
       created: '2012-09-11T02:51:00Z',
       access: [ 'GuildWars2', 'HeartOfThorns', 'PathOfFire' ],
       commander: false,
       fractal_level: 2,
       daily_ap: 1557,
       monthly_ap: 1,
       wvw_rank: 31
      }
    */
    const { name, age, world, commander, fractal_level, created } = response;
    const accountEmbed = new Embed(name, '#ffffff', null, null);
    accountEmbed.addField('World', WORLDS[world].name, true)
    accountEmbed.addField('Created', created, true);
    accountEmbed.addField('Playtime', secondsToString(age));
    accountEmbed.addField('Fractal Level', fractal_level, true);
    accountEmbed.addField('Commander Status', commander, true);
    return accountEmbed.embed;
  }
  catch (error) {
    console.error('api.js@account:', error.message);
    return error;
  }
}

module.exports = player;

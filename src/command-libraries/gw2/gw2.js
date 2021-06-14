const _get = require('lodash.get');
const config = require('../../../config.json');
const api = require('./api');
const player = require('./player');
const pvp = require('./pvp');


// const { WORLDS } = require('./static-data');
// const worldsMap = {};
// WORLDS.forEach(({ id, name, population }) => {
//   worldsMap[parseInt(id)] = { name, population };
// });
// console.info(worldsMap , 'gw2.js@');

const GuildWars2 = {};

const subCommands = [ api, player, pvp ];

const helpCommander = {
  help : () => {
    let library = [];
    for(let i = 0; i < subCommands.length; i++){
      library.push(...Object.keys(subCommands[i]));
    }
    let response = `\`${config.prefix}gw2\` sub-commands: `;
    library.forEach(command => response += `\`${command}\`, `);
    return(response.slice(0, response.length - 2));
  }
}
subCommands.push(helpCommander);

const generateError = (message) => {
  return `\`${config.prefix}gw2\` error: \`${message}\``;
}

GuildWars2.gw2 = async function(query, message) {
  try {
    const subQuery = query[0];
    const subCommand = subQuery[0];
    if (!subCommand) return generateError(`Please provide a sub-command: $gw2 <subcommand>`);

    const discordID = _get(message, 'author.id', '');

    for (let i = 0; i < subCommands.length; i++){
      if (subCommand in subCommands[i]){
        return await subCommands[i][subCommand](subQuery[1], discordID);
      }
    }

    return generateError('Under Construction');
  }
  catch (error) {
    console.error('gw2.js@gw2:', error.message);
    return generateError(error.message);
  }
}


module.exports = GuildWars2;

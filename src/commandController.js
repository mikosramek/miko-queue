'use strict'

const magic = require('./command-libraries/magic');
const stackoverflow = require('./command-libraries/stackoverflow');
const ageOfSigmarWiki = require('./command-libraries/ageofsigmar-wiki');
const debug = require('./command-libraries/debug');
const gw2 = require('./command-libraries/gw2/gw2');
// const notion = require('./command-libraries/notion');

const commandLibrary = [ debug, magic, stackoverflow, ageOfSigmarWiki, gw2 ];

const commander = {};

commander.Controller = function(config) {
  this.prefix = config.prefix;
}

commander.Controller.prototype.parseCommand = function(message, command, ...parameters) {
  return new Promise(async (resolve, reject) => {
    if(command[0] === this.prefix){
      const c = command.slice(1).toLowerCase();
      if(c === 'commands'){
        let library = [];
        for(let i = 0; i < commandLibrary.length; i++){
          library.push(...Object.keys(commandLibrary[i]));
        }
        let response = 'Current Commands: ';
        library.forEach(command => response += `\`${this.prefix}${command}\`, `);
        resolve(response.slice(0, response.length - 2));
      }
      for (let i = 0; i < commandLibrary.length; i++){
        if (c in commandLibrary[i]){
          const r = await commandLibrary[i][c](parameters, message);
          resolve(r);
        }
      }
      reject(`\`${command}\` command not found.`);
    }
    reject();
  });
}

module.exports = commander;

'use strict'

const magic = require('./command-libraries/magic');
const stackoverflow = require('./command-libraries/stackoverflow');
const ageOfSigmarWiki = require('./command-libraries/ageofsigmar-wiki');

const commandLibrary = [ magic, stackoverflow, ageOfSigmarWiki ];

const commander = {};

commander.Controller = function(config) {
  this.prefix = config.prefix;
}
// commander.Controller.prototype.searchForACard = function(query){
//   return magic.search(query);
// }

commander.Controller.prototype.parseCommand = function(command, ...parameters) {
  return new Promise(async (resolve, reject) => {
    if(command[0] === this.prefix){
      const c = command.slice(1).toLowerCase();
      if(c === 'commands'){
        let library = [];
        for(let i = 0; i < commandLibrary.length; i++){
          library.push(...Object.keys(commandLibrary[i]));
        }
        resolve(this.prefix + library.join(`, ${this.prefix}`));
      }
      for(let i = 0; i < commandLibrary.length; i++){
        if(c in commandLibrary[i]){
          const r = await commandLibrary[i][c](parameters);
          resolve(r);
        }
      }
      reject(`\`${command}\` command not found.`);
    }
    reject();
  });
}

module.exports = commander;

'use strict'

const magic = require('./magic');

const commandLibary = [ magic ];

const commander = {};

commander.Controller = function(config) {
  this.prefix = config.prefix;
}
commander.Controller.prototype.searchForACard = function(query){
  return magic.search(query);
}

commander.Controller.prototype.parseCommand = function(command, ...parameters) {
  return new Promise(async (resolve, reject) => {
    if(command[0] === this.prefix){
      const c = command.slice(1).toLowerCase();
      for(let i = 0; i < commandLibary.length; i++){
        if(c in commandLibary[i]){
          try {
            const r = await commandLibary[i][c](parameters);
            resolve(r);
          } catch(e) {
            reject(e);
          }
        }
      }
      reject('Command not found.');
    }
    reject();
  });
}

module.exports = commander;
'use strict'
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const magic = {};

const get = function(url, query) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}${encodeURI(query)}`);
    xhr.onload = function() {
      if(xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        const errorMessage = JSON.parse(xhr.responseText);
        reject(errorMessage);
      }
    }
    xhr.send();
  });
}

magic.card = async function(query) {
  try {
    const card = await get('https://api.scryfall.com/cards/named?fuzzy=', query);
    const { name, mana_cost, type_line, oracle_text, artist } = card;
    return `**Search resulted in:**\n${name} ${mana_cost}\n${type_line}\n**This card does:**\n${oracle_text}`;
  }catch(e) {
    return `Search failed: ${e.details}`;
  }
}

module.exports = magic;
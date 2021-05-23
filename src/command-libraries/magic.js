'use strict'
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const magic = {};

const Embed = require('../utility/embed');

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
    const { name, mana_cost, type_line, oracle_text, artist, scryfall_uri, image_uris, flavor_text } = card;
    const cardEmbed = new Embed(name, '#ffffff', scryfall_uri, image_uris.normal);
    cardEmbed.addField('Mana Cost', mana_cost, true);
    cardEmbed.addField('Card Type', type_line, true);
    cardEmbed.addField('Oracle Text', oracle_text);
    cardEmbed.addField('Flavour Text', flavor_text);
    cardEmbed.addFooter(artist);
    return cardEmbed.embed;
  }
  catch(e) {
    return `Search failed: ${e.details}`;
  }
}

module.exports = magic;

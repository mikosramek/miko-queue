const axios = require('axios');
const _get = require('lodash.get');
const { FLAGS } = require('./config');
const GW2Items = require('../../utility/GW2ItemLibrary');
const Embed = require('../../utility/embed');
const { colours } = require('../../data/itemRarityColours');

const lookup = {};

lookup.copperToGold = (query) => {
  return GW2Items.convertCopperToGold(query);
}

lookup.search = async (query, _discordId, restOfQuery) => {
  let searchResults;
  try {
    searchResults = GW2Items.findOne([query, ...restOfQuery]);
  }
  catch (error) {
    console.error('lookup.js@search:', error.message);
    return error.message;
  }
  const { name, id, icon, rarity, description } = searchResults;
  const itemEmbed = new Embed(name, colours[rarity.toLowerCase()], encodeURI(`https://wiki.guildwars2.com/wiki/${name}`), icon);

  if (description) itemEmbed.addField('Description', description);

  const lastQueryItem = restOfQuery.slice(-1)[0];
  if (lastQueryItem === FLAGS.tp) {
    try {
      const tpData = (await axios(`https://api.guildwars2.com/v2/commerce/prices/${id}`)).data;
      const buyingPrice = _get(tpData, 'buys.unit_price', 0);
      const sellingPrice = _get(tpData, 'sells.unit_price', 0);
      itemEmbed.addField('Buying', GW2Items.convertCopperToGold(buyingPrice), true);
      itemEmbed.addField('Selling', GW2Items.convertCopperToGold(sellingPrice), true);
    }
    catch(e) {
      itemEmbed.addFooter('Not on the trading post.');
    }
  }

  return itemEmbed.embed;
}

module.exports = lookup;

'use strict'

const Embed = require('../utility/embed');

// https://ageofsigmar.fandom.com/api.php?action=query&titles=Slaanesh&format=json&prop=images
// https://ageofsigmar.fandom.com/api.php?action=query&titles=Slaanesh&format=json&prop=revisions&rvprop=content&rvslots=main

const aos = {};
const wiki = new (require('../utility/fandom-wiki'))('ageofsigmar');

aos.aosimage = async function(query) {
  try {
    const { imageUrl, pageUrl, title } = await wiki.queryImage(query);
    return new Embed(title, '#ffffff', pageUrl, imageUrl).embed;
  }
  catch (error) {
    console.error('ageofsigmar-wiki.js@aos:', error.message);
    return `Search failed: ${error.message}`;
  }
}

module.exports = aos;

const _get = require('lodash.get');
const XHR = require('../utility/xhr');

// https://community.fandom.com/api.php
// https://community.fandom.com/api.php?action=help&modules=query
// https://community.fandom.com/api.php?action=help&modules=query%2Bimages
// https://community.fandom.com/api.php?action=help&modules=query%2Brevisions

class FandomWiki {
  constructor(fandomName) {
    this.fandom = fandomName;
    this.api = `https://${this.fandom}.fandom.com/api.php`
  }
  // https://ageofsigmar.fandom.com/api.php?action=query&titles=Slaanesh&format=json&prop=images
  // https://ageofsigmar.fandom.com/api.php?action=query&titles=File:40kSlaaneshPreview-Jan05-Banner4d.jpg&format=json&prop=imageinfo&iiprop=url
  async getImage(fileName) {
    const result = await XHR.get(`${this.api}?action=query&titles=${fileName}&format=json&prop=imageinfo&iiprop=url`, '');
    const pages = _get(result, 'query.pages', null);
    if (!pages) return new Error('Malformed Image Data.');
    const pageArray = Object.entries(pages);
    if (pageArray < 1) return new Error('Malformed Image Data.');
    const [key, value] = pageArray[0];
    return {
      imageUrl : _get(value, 'imageinfo[0].url', ''),
      pageUrl : _get(value, 'imageinfo[0].descriptionshorturl', '')
    };
  }
  async queryImage(searchQuery) {
    try {
      const URL =`${this.api}?action=query&titles=${searchQuery}&format=json&prop=images`;
      const result = await XHR.get(URL, '');
      const pages = _get(result, 'query.pages', {});
      for (const [key, value] of Object.entries(pages)) {
        const { images, title } = value;
        if (images.length > 0) {
          return {
            ...(await this.getImage(images[0].title)),
            title
          }
        }
      }
      return new Error('No image found.');
    }
    catch (error) {
      console.error('fandom-wiki.js@queryImages:', error.message);
      return error;
    }
  }
  async queryContent (query) {
    try {
      const result = await XHR.get(
        `${this.api}?action=query&titles=${query}&format=json&prop=revisions&rvprop=content&rvslots=main`,
        ''
      );
      console.log(result);
    }
    catch (error) {
      console.error('fandom-wiki.js@queryImages:', error.message);
    }
  }
  async queryPage (query) {
    try {
      const result = await XHR.get(
        `${this.api}?action=query&titles=${query}&format=json&prop=images|revisions&rvprop=content&rvslots=main`,
        ''
      );
      console.log(result);
    }
    catch (error) {
      console.error('fandom-wiki.js@queryImages:', error.message);
    }
  }
}

module.exports = FandomWiki;

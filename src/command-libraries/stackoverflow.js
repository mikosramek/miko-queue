'use strict'
if(process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const xhr = require('../utility/xhr');

const stackoverflow = {};

stackoverflow.sosearch = async function(query) {
  try {
    // const posts = await xhr.get(`https://api.stackexchange.com/2.2/search/excerpts?order=desc&sort=activity&site=stackoverflow&pagesize=3&q=`, query);
    // console.log(posts);
    return 'success';
  } catch (e) {
    return e
  }
}

module.exports = stackoverflow;
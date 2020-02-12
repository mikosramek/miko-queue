'use strict'
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const XHR = {};

XHR.get = function(url, query) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${encodeURI(url+query)}`);
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

module.exports = XHR;
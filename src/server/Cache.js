const { LOG, print } = require('./util/logger');

class Cache {
  constructor() {
    this.cache = {};
  }
  addToCache (key, data) {
    this.cache[key] = data;
  }
  addToCacheSafely (key, data) {
    if (this.cache[key]) return;
    this.cache[key] = data;
  }
  removeFromCache(key) {
    delete this.cache[key];
  }
  get(key) {
    return this.cache[key];
  }

  print() {
    print(LOG.heading('** CACHE START **'));
    for (const [key, value] of Object.entries(this.cache)) {
      LOG.doubleItem(
        LOG.positive(key),
        LOG.warning(value)
      )
    }
    print(LOG.heading('** CACHE END **'));
  }
}

module.exports = new Cache();

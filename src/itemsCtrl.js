var _ = require('lodash');

var Items = (function() {

  var all = function() {
    return {
      by: 'all'
    }
  }

  var byAlphabetical = function() {
    return {
      by: 'alphabetical'
    }
  }

  return {
    all,
    byAlphabetical
  }
})();

module.exports = Items;
var _ = require('lodash');
var itemData = require('../data/itemList.json');

var Items = (function() {

  var all = function() {
    return {
      by: itemData
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
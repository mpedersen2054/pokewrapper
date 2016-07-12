var _ = require('lodash');
var itemData = require('../data/itemList.json');

var Items = (function() {

  var all = function() {
    var items  = _.clone(itemData);
    var sorted = _.sortBy(items, 'itemNum');

    return {
      data: sorted
    }
  }

  var byAlphabetical = function() {
    var items  = _.clone(itemData);
    var sorted = _.sortBy(items, 'name');

    return {
      data: sorted
    }
  }

  return {
    all,
    byAlphabetical
  }
})();

module.exports = Items;
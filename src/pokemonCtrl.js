// var lodash = require('lodash');
// var _ = lodash;

var Pokemon = (function() {

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

  var byType = function() {
    return {
      by: 'type'
    }
  }

  var byStat = function() {
    return {
      by: 'stat'
    }
  }

  return {
    all,
    byAlphabetical,
    byType,
    byStat
  }
})();

module.exports = Pokemon;
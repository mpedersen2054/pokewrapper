var _ = require('lodash');

var Moves  = (function() {

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

  var byDamage = function() {
    return {
      by: 'damage'
    }
  }

  return {
    all,
    byAlphabetical,
    byType,
    byDamage
  }
})();

module.exports = Moves;
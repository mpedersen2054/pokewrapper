var _ = require('lodash');
var pokeData = require('../data/pokemonList.json');

var Pokemon = (function() {

  var all = function() {
    return {
      by: pokeData.length
    }
  }

  var byAlphabetical = function() {
    return {
      by: 'alphabetical'
    }
  }

  // types=[]
  var byType = function(types) {
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
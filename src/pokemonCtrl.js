var _ = require('lodash');
var pokeData = require('../data/pokemonList.json');

var Pokemon = (function() {

  var all = function() {
    var pokemon = _.clone(pokeData);
    var sorted  = _.sortBy(pokemon, function(p) {
      return +p.natNum;
    });
    return {
      by: sorted
    }
  }

  var byAlphabetical = function() {
    var pokemon = _.clone(pokeData);
    var sorted  = _.sortBy(pokemon, function(p) {
      return p.name;
    });
    return {
      by: sorted
    }
  }

  // types=[]
  var byType = function(types) {
    var pokemon  = _.clone(pokeData);
    var filtered = _.filter(pokemon, function(p) {
      // if there are 2 types make sure both are in there
      // else just make sure the 1 type is in types array
      if (types.length > 1) {
        if (_.includes(p.types, types[0]) && _.includes(p.types, types[1])) {
          return p;
        }
      } else {
        if (_.includes(p.types, types[0])) {
          return p;
        }
      }
    })
    // show stronger first
    var sorted = _.reverse(_.sortBy(filtered, 'bst'));
    return {
      by: sorted
    }
  }

  var byStat = function(stat) {
    var pokemon = _.clone(pokeData);
    // show stronger first
    var sorted  = _.reverse(_.sortBy(pokemon, stat));
    return {
      by: sorted
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
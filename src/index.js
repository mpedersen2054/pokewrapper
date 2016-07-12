
var pokemonData = require('./pokemonSimple.json');
var Pokemon     = require('./pokemonCtrl.js');
var Items       = require('./itemsCtrl.js');
var Moves       = require('./movesCtrl.js');

// module that will be the object that will be exported when people require the module
module.exports = {
  pokemon: {
    all:            Pokemon.all,
    byAlphabetical: Pokemon.byAlphabetical,
    byType:         Pokemon.byType,
    byStat:         Pokemon.byStat
  },

  items: {
    all:            Items.all,
    byAlphabetical: Items.byAlphabetical
  },

  moves: {
    all:            Moves.all,
    byAlphabetical: Moves.byAlphabetical,
    byType:         Moves.byType,
    byDamage:       Moves.byDamage
  }
}

// can be installed from the npm registrar by doing
// npm i --save pokewrapper within desired directory

var Pokemon     = require('./pokemonCtrl.js');
var Items       = require('./itemsCtrl.js');
var Moves       = require('./movesCtrl.js');

// module that will be the object that will be
// exported when people require the module
module.exports = {
  pokemon: {
    all:            Pokemon.all,            // pokewrapper.pokemon.all()
    byAlphabetical: Pokemon.byAlphabetical, // pokewrapper.pokemon.byAlphabetical()
    byType:         Pokemon.byType,         // pokewrapper.pokemon.byType(['water'])
    byStat:         Pokemon.byStat          // pokewrapper.pokemon.byStat(['sAt'])
  },

  items: {
    all:            Items.all,              // pokewrapper.items.all()
    byAlphabetical: Items.byAlphabetical    // pokewrapper.items.byAlphabetical()
  },

  moves: {
    all:            Moves.all,              // pokewrapper.moves.all()
    byTm:           Moves.byTm,             // pokewrapper.moves.byTm()
    byType:         Moves.byType,           // pokewrapper.moves.byType('water')
    byDamage:       Moves.byDamage          // pokewrapper.moves.byDamage()
  }
}


var pokemonData = require('./pokemonSimple.json');
var Pokemon = require('./pokemonCtrl.js');
// var itemsCtrl = require('./itemsCtrl.js');
// var movesCtrl = require('./movesCtrl.js');

// module that will be the object that will be exported when people require the module
module.exports = {
  pokemon: {
    all: Pokemon.all,
    byAlphabetical: Pokemon.byAlphabetical,
    byType: Pokemon.byType,
    byStat: Pokemon.byStat
  }
}
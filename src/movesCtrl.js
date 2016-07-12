var _ = require('lodash');
var moveData = require('../data/moveList.json')

var Moves  = (function() {

  // returns all moves in alphabetical
  var all = function() {
    var moves  = _.clone(moveData);
    var sorted = _.sortedUniq(moves);
    return {
      by: sorted
    }
  }

  // sorts the moves based on TM# and
  // returns them in descending order
  var byTm = function() {
    var moves  = _.clone(moveData);
    var sorted = _.sortBy(moves, function(m) { return +m.tmNum });
    return {
      by: sorted
    }
  }

  // type='' // moves only have 1 type
  // accepts the type & returns moves
  // that are of the type specified
  var byType = function(type) {
    var moves  = _.clone(moveData);
    var sorted = _.filter(moves, function(m) {
      return m.type === _.capitalize(type);
    })
    return {
      by: sorted
    }
  }

  // accepts physical / special
  // var byDamage = function(category) {
  //   var moves = _.clone(moveData);
  //   var filtered = _.filter(moves, function(m) {
  //     return m.category === _.capitalize(category);
  //   });
  //   var sorted = _.sortBy(filtered, 'power');
  //   return {
  //     by: _.reverse(sorted)
  //   }
  // }

  return {
    all,
    byTm,
    byType,
    // byDamage
  }
})();

module.exports = Moves;
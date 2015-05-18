// Stateful modules

// Node.js style module system
function require(name) {
  return require.cache[name];
}
require.cache = {};
function define(name, body) {
  var module = {}, exports = {};
  module.exports = exports;
  body(module, exports);
  require.cache[name] = module.exports;
}

// And some modules

define('emoji', function(module, exports) {
  module.exports = {
    'horse': '🐴',
    'monkey': '🐵',
    'bear': '🐻'
  };
});

define('voting', function(module, exports) {
  var votes = exports.votes = {};
  exports.vote = function vote(name) {
    votes[name] = (votes[name] || 0) + 1;
  };
});

define('display', function(module, exports) {
  var emoji = require('emoji');

  function repeat(n, char) {
    if (!n) return '';
    return new Array(n + 1).join(char); // oops
  }

  module.exports = function display(votes) {
    Object.keys(emoji).forEach(function(name) {
      console.log(
        "%s\t%s", name,
        repeat(votes[name], emoji[name])
      );
    });
  };
});

// Using modules

var voting = require('voting');
var display = require('display');

voting.vote('horse');
voting.vote('horse');
voting.vote('horse');
voting.vote('monkey');
voting.vote('monkey');
voting.vote('bear');

display(voting.votes);

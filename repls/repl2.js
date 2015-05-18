// Stateful, side effecting

var emoji = {
  'horse': '🐴',
  'monkey': '🐵',
  'bear': '🐻'
};

// State gets reset
var votes = votes || {};

function vote(name) {
  votes[name] = (votes[name] || 0) + 1;
}

function repeat(n, char) {
  if (!n) return '';
  return new Array(n + 1).join(char); // oops
}

function display() {
  Object.keys(emoji).forEach(function(name) {
    console.log(
      "%s\t%s", name,
      repeat(votes[name], emoji[name] + ' ')
    );
  });
}

// vote('horse');
// vote('horse');
// vote('horse');
// vote('monkey');
// vote('monkey');
// vote('bear');

display();

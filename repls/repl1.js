// Stateless, side effecting

var emoji = {
  'horse': '🐴',
  'monkey': '🐵',
  'bear': '🐻'
};

function display() {
  Object.keys(emoji).forEach(function(name) {
    console.log(name,
      new Array(20).join(emoji[name] + '  '));
  });
}

display();

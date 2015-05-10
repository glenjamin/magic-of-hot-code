/* eslint-env browser */

if (window.location.search.match(/hot/)) {
  require('webpack/hot/dev-server');
}

var React = require('react');

var App = require('./App');

require('./page.css');
window.app = React.render(
  <App />,
  document.getElementById('root')
);

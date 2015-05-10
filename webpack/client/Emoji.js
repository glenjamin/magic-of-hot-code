var React = require('react');

require('./Emoji.css');

var Emoji = React.createClass({
  render() {
    return <span className="Emoji">{this.props.children}</span>;
  }
});

module.exports = Emoji;

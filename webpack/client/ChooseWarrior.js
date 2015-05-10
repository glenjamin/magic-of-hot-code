var React = require('react');

var Emoji = require('./Emoji');

require('./Choose.css');

var ChooseWarrior = React.createClass({
  render() {
    var warriors = this.props.warriors;
    return (
      <div>
        <h1>Step {this.props.step}: Choose your warrior</h1>
        <table className="Choose--table">
          <thead>
            <tr>
              <th></th>
              <th className="Choose--name">Name</th>
              <th>Strength</th>
              <th>Dexterity</th>
              <th>Stamina</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(warriors).map(
              w => this.renderWarrior(warriors[w], w))}
          </tbody>
        </table>
      </div>
    );
  },
  renderWarrior(warrior, id) {
    return <tr key={id}>
      <td><Emoji>{warrior.emoji}</Emoji></td>
      <td className="Choose--name">{warrior.name}</td>
      <td>{warrior.stats.str}</td>
      <td>{warrior.stats.dex}</td>
      <td>{warrior.stats.stm}</td>
      <td>
        <button onClick={() => {
          this.props.update({ warrior: id });
          this.props.next();
        }}>
          Choose
        </button>
      </td>
    </tr>;
  }
});

module.exports = ChooseWarrior;

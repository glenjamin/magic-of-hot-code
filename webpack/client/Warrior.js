var React = require('react');

var Emoji = require('./Emoji');

function addStats(...args) {
  return args.reduce((stats, more) => {
    if (more) {
      Object.keys(stats).forEach(stat => {
        stats[stat] += (more[stat] || 0);
      });
    }
    return stats;
  }, { str: 0, dex: 0, stm: 0 });
}

require('./Warrior.css');

var Warrior = React.createClass({
  render() {
    var {warrior, item, cpu, emoji} = this.props;

    if (!warrior) return null;

    var stats = addStats(warrior.stats, item && item.stats);
    return (
      <table className="Warrior--table">
        <tbody>
          <tr>
            <td rowSpan="3">

            </td>
            <td rowSpan="3" className="Warrior--name">
              <h3>{cpu ? "CPU" : warrior.name}</h3>
              <Emoji>{emoji || warrior.emoji}</Emoji>
              {item && <Emoji>{item.emoji}</Emoji>}
            </td>
            <th>Strength</th>
            <td>{stats.str}</td>
            <td rowSpan="3">

            </td>
          </tr>
          <tr>
            <th>Dexterity</th>
            <td>{stats.dex}</td>
          </tr>
          <tr>
            <th>Stamina</th>
            <td>{stats.stm}</td>
          </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = Warrior;

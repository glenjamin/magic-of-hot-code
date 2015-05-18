var React = require('react');

var cx = require('classnames');

var Warrior = require('./Warrior');
var Emoji = require('./Emoji');

require('./Choose.css');

var ChooseWarrior = React.createClass({
  getInitialState() {
    var pick = null;
    Object.keys(this.props.items).forEach((item, i) => {
      if (this.props.item === item) {
        pick = i;
      }
    });
    return { pick: pick };
  },
  render() {
    var items = this.props.items;
    var warrior = this.props.warrior;
    var pick = items[this.state.pick];
    return (
      <div>
        <h1>Step {this.props.step}: Choose your item</h1>
        <div className="Choose--nav">
          <div className="Choose--nav-item">
            <button onClick={this.props.prev}>
              Back
            </button>
          </div>
          <div className="Choose--nav-item">
            <Warrior
              warrior={warrior}
              item={pick}
            />
          </div>
          <div className="Choose--nav-item">
            <button
              disabled={!pick}
              onClick={() => {
                this.props.update({ item: this.state.pick });
                this.props.next();
              }}
            >
              Next
            </button>
          </div>
        </div>
        <table className="Choose--table" cellSpacing="0">
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
            {Object.keys(items).map(
              i => this.renderItem(items[i], i))}
          </tbody>
        </table>
      </div>
    );
  },
  renderItem(item, id) {
    return <tr key={id} className={cx({
      "Choose--row__selected": id == this.state.pick
    })}>
      <td><Emoji>{item.emoji}</Emoji></td>
      <td className="Choose--name">{item.name}</td>
      <td>{item.stats.str}</td>
      <td>{item.stats.dex}</td>
      <td>{item.stats.stm}</td>
      <td>
        <button onClick={() => this.setState({pick: id})}>
          Pick
        </button>
      </td>
    </tr>;
  }
});

module.exports = ChooseWarrior;

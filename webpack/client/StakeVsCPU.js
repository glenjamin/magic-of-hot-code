var React = require('react');

var cx = require('classnames');

var Warrior = require('./Warrior');

function pick(options) {
  var keys = Object.keys(options);
  return keys[Math.floor(Math.random() * keys.length)];
}

require('./StakeVsCPU.css');

var StakeVsCPU = React.createClass({
  componentWillMount() {
    if (!this.props.cpu) {
      this.props.update({
        cpu: {
          warrior: pick(this.props.warriors),
          item: pick(this.props.items),
        }
      });
    }
  },
  getInitialState() {
    return { stake: null };
  },
  onSubmit(event) {
    event.preventDefault();
    if (this.state.stake === null) {
      this.setState({ stake: 0 });
      return;
    }
    this.props.update({ stake: parseFloat(this.state.stake) });
    this.props.next();
  },
  stakeValid() {
    return (
      (this.state.stake === null) ||
      (this.state.stake > 0) &&
      (this.state.stake <= this.props.credits)
    );
  },
  render() {
    var cpu = this.props.cpu || {};
    return (
      <div>
        <h1>Step {this.props.step}: Choose Bet</h1>
        <div className="StakeVsCPU--headsup">
          <div className="StakeVsCPU--headsup-item">
            <Warrior
              warrior={this.props.warrior}
              item={this.props.item}
            />
          </div>
          <div className="StakeVsCPU--headsup-item">
            <h2>VS</h2>
          </div>
          <div className="StakeVsCPU--headsup-item">
            <Warrior cpu
              warrior={cpu.warrior}
              item={cpu.item}
            />
          </div>
        </div>
        <form
          className="StakeVsCPU--betting"
          onSubmit={this.onSubmit}
        >
          <h3>
            <label htmlFor="stake">
              Enter Bet Amount
            </label>
          </h3>
          <p>
            <input
              type="text"
              id="stake"
              autoFocus
              className={cx("StakeVsCPU--input", {
                "StakeVsCPU--input__invalid": !this.stakeValid()
              })}
              onChange={e => this.setState({ stake: e.target.value })}
            />
          </p>
          <p>
            <button type="submit" className="StakeVsCPU--submit">
              Begin Fight
            </button>
          </p>
        </form>
      </div>
    );
  }
});

module.exports = StakeVsCPU;

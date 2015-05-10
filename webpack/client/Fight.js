var React = require('react');

var Warrior = require('./Warrior');

require('./Fight.css');

var Fight = React.createClass({
  componentDidMount() {
    var win = Math.random() < 0.5;
    setTimeout(() =>
      this.setState({ leftEmoji: '💥' }), 1000);
    setTimeout(() =>
      this.setState({ leftEmoji: null, rightEmoji: '💥' }), 2000);
    setTimeout(() =>
      this.setState({ leftEmoji: null, rightEmoji: null }), 3000);
    var loser = win ? 'leftEmoji': 'rightEmoji';
    setTimeout(() => this.setState({ [loser]: '💥' }), 3200);
    setTimeout(() => {
      this.setState({ [loser]: '💀', win: win });
      var n = this.props.stake;
      this.props.payout(win ? n : -1 * n);
    }, 4000);
  },
  componentWillReceiveProps() {
    //this.componentDidMount();
  },
  getInitialState() {
    return {
      win: null,
      leftEmoji: null,
      rightEmoji: null
    };
  },
  render() {
    var {cpu} = this.props;
    return (
      <div>
        <h1>Fight!</h1>
        <div className="Fight--headsup">
          <div className="Fight--headsup-item">
            <Warrior
              warrior={this.props.warrior}
              item={this.props.item}
              emoji={this.state.leftEmoji}
            />
          </div>
          <div className="Fight--headsup-item">
            <h2>VS</h2>
          </div>
          <div className="Fight--headsup-item">
            <Warrior cpu
              warrior={cpu.warrior}
              item={cpu.item}
              emoji={this.state.rightEmoji}
            />
          </div>
        </div>
        <div className="Fight--summary">
          {this.state.win === true &&
            <p>You won {this.props.stake} credits</p>}
          {this.state.win === false &&
            <p>You lost {this.props.stake} credits</p>}
          {this.state.win !== null &&
            <button onClick={this.props.reset}>
              Play Again
            </button>}
        </div>
      </div>
    );
  }
});

module.exports = Fight;

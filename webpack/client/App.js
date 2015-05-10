var React = require('react');

var warriors = require('./warriors');
var items = require('./items');

var steps = [
  require('./ChooseWarrior'),
  require('./ChooseItem'),
  require('./StakeVsCPU'),
  require('./Fight'),
];

require('./App.css');

var App = React.createClass({
  getInitialState() {
    return {
      step: 1,
      credits: 100,
      data: {
        warrior: null,
        item: null,
        cpu: {
          warrior: null,
          item: null
        },
        stake: null
      }
    };
  },
  render() {
    var Step = steps[this.state.step - 1] || "hr";
    var cpu = this.state.data.cpu.warrior && {
      warrior: warriors[this.state.data.cpu.warrior],
      item: items[this.state.data.cpu.item]
    };
    return (
      <div>
        <h1 className="App--header">
          💢<strong>EmojiFighter</strong>💢
        </h1>
        <p className="App--credits">
          {this.state.credits} credits
        </p>
        <Step
          step={this.state.step}

          credits={this.state.credits}
          warriors={warriors}
          warrior={warriors[this.state.data.warrior]}
          items={items}
          item={items[this.state.data.item]}
          cpu={cpu}
          stake={this.state.data.stake}

          payout={n => this.setState(s => ({
            credits: s.credits + n
          }))}
          update={data => this.setState(s => ({
            data: {...s.data, ...data}
          }))}
          next={() => this.setState(s => ({ step: s.step + 1 }))}
          prev={() => this.setState(s => ({ step: s.step - 1 }))}
          reset={() => this.setState(s => ({
            ...this.getInitialState(),
            ...{ credits: s.credits }
          }))}
        />
        <footer>
          <a href="https://github.com/glenjamin/magic-of-hot-code">
            View Source on GitHub
          </a>
        </footer>
      </div>
    );
  }
});

module.exports = App;

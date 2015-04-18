var React = require("react");

var Hello = React.createClass({
  propTypes: {
    initialCount: React.PropTypes.number
  },
  getDefaultProps() {
    return {
      initialCount: 0
    };
  },
  getInitialState() {
    return {
      count: this.props.initialCount
    };
  },
  handleClick() {
    this.setState({ count: this.state.count + 1});
  },
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <div className="clearfix">
          <a className="btn btn-sm btn-with-count" onClick={this.handleClick}>
            <span className="octicon octicon-thumbsup"></span>
            &nbsp;Vote
          </a>
          <a className="social-count">{this.state.count}</a>
        </div>
      </div>
    );
  }
});

module.exports = Hello;

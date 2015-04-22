//var React = require('react');
var React = require('react/addons');

var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

module.exports = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  propTypes: {
    initialSource: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      initialSource: ''
    };
  },
  getInitialState() {
    return {
      source: this.props.initialSource
    };
  },
  //handleChange(e) {
  //  this.setState({ source: e.target.value });
  //},
  handleSubmit(e) {
    e.preventDefault();
  },
  render() {
    var preview = marked(this.state.source);
    return (
      <div>
        <h1>Form</h1>
        <div className="container">
          <div className="colmuns">
            <div className="one-half column">
              <form onSubmit={this.handleSubmit}>
                <dl className="form">
                  <dt><label>Markdown</label></dt>
                  {/* <dd><textarea value={this.state.source} onChange={this.handleChange}></textarea></dd> */}
                  <dd><textarea valueLink={this.linkState('source')}></textarea></dd>
                </dl>
                <button className="btn" type="submit">Submit</button>
              </form>
            </div>
            <div className="one-half column">
              <div className="preview markdown-body" dangerouslySetInnerHTML={{__html: preview}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


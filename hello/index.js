var React = require('react');

var Hello = require('./components/hello');

var props = {
  initialCount: 1
};
React.render(<Hello {...props} />, document.querySelector('#app'));


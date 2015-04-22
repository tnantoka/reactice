var React = require('react');

var MyForm = require('./components/my_form');

var props = {
  initialSource: ''
};
React.render(<MyForm {...props} />, document.querySelector('#app'));


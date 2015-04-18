jest.dontMock('../components/Hello');

describe('Hello', function() {
  it('increments the count after click', function() {
    var React = require('react/addons');
    var Hello = require('../components/Hello');
    var TestUtils = React.addons.TestUtils;

    var hello = TestUtils.renderIntoDocument(
      <Hello />
    );

    var count = TestUtils.findRenderedDOMComponentWithClass(hello, 'social-count');
    expect(count.getDOMNode().textContent).toEqual('0');

    var btn = TestUtils.findRenderedDOMComponentWithClass(hello, 'btn');
    TestUtils.Simulate.click(btn);
    expect(count.getDOMNode().textContent).toEqual('1');
  });
});

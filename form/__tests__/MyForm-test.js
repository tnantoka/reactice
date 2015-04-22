jest.dontMock('../components/my_form');
jest.dontMock('marked');

describe('MyForm', function() {
  it('preview the content after change', function() {
    var React = require('react/addons');
    var MyForm = require('../components/my_form');
    var TestUtils = React.addons.TestUtils;

    var form = TestUtils.renderIntoDocument(
      <MyForm />
    );

    var preview = TestUtils.findRenderedDOMComponentWithClass(form, 'preview');
    expect(preview.getDOMNode().textContent).toEqual('');

    var textarea = TestUtils.findRenderedDOMComponentWithTag(form, 'textarea');
    TestUtils.Simulate.change(textarea, { target: { value: "# Form" } });
    expect(preview.getDOMNode().innerHTML).toEqual('<h1 id="form">Form</h1>\n');
  });
});

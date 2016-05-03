  // __tests__/LoginCTA-test.js
  'use strict';

  jest.unmock('../src/LoginCTA.js');

  import React from 'react';
  import ReactDOM from 'react-dom';
  import TestUtils from 'react-addons-test-utils';
  import LoginCTA from '../src/LoginCTA.js';

describe('LoginCTA', () => {

  let testDocument, renderLoginCTA;

  beforeEach(function() {
    // Render a LoginCTA with a copy in the document
    renderLoginCTA = <LoginCTA copy="Test Copy" isTextCentred={true}/>;
    testDocument = TestUtils.renderIntoDocument(
        renderLoginCTA
    );
  });

  it('copy Test Copy is rendered correctly', () => {
    const loginCTANode = ReactDOM.findDOMNode(testDocument);
    expect(testDocument.refs.callToAction.innerHTML).toEqual('Test Copy');
  });

  it('component has got text-center class', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(testDocument,'text-center')).not.toEqual(false);
  });

});

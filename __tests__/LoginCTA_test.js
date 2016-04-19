// __tests__/LoginCTA-test.js
'use strict';

jest.unmock('../src/LoginCTA.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import LoginCTA from '../src/LoginCTA.js';

describe('LoginCTA', () => {

  let loginCTA;

  beforeEach(function() {
    // Render a LoginCTA with a copy in the document
    loginCTA = TestUtils.renderIntoDocument(
        <LoginCTA copy="Test Copy" isTextCentred={true}/>
    );
  });

  it('copy Test Copy is rendered correctly', () => {
    const loginCTANode = ReactDOM.findDOMNode(loginCTA);
    expect(loginCTA.refs.callToAction.innerHTML).toEqual('Test Copy');
  });

  it('component has got text-center class', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(loginCTA,'text-center')).not.toEqual(false);
  });

});

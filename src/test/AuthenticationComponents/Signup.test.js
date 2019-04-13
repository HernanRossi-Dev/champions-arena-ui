import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { Signup } from '../../js/components/AuthenticateUser/Signup';
import * as API from '../../js/apiUtils/userApiHelpers';
import * as userActions from '../../js/actions/UserActionCreators';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Signup component test suite', function () {
  let createRegisteredUserStub, wrapper, props;
  beforeEach(() => {
    createRegisteredUserStub = sinon.stub(userActions, 'createRegisteredUser').resolves({});
    props = {
      classes: {
        root: {
          fontColor: 'white'
        },
        input: {
          color: "white",
          fontSize: 18,
          fontColor: 'white'
        },
        labelStyle: {
          color: '#df691a',
          fontSize: 16,
          fontFamily: "'Crimson Text', sans-serif",
        },
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
      }
    }
  });
  afterEach(() => {
    userActions.createRegisteredUser.restore();
  });
  it('should render without throwing an error', function () {
    wrapper = shallow(<Signup {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

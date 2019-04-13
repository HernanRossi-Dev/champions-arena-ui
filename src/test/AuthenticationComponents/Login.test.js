import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { Login } from '../../js/components/AuthenticateUser/Login';
import * as API from '../../js/apiUtils/userApiHelpers';
import * as userActions from '../../js/actions/UserActionCreators';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Login component test suite', function () {
  let setCurrentUserStub, loginRegisteredUserStub, wrapper, props;
  beforeEach(() => {
    setCurrentUserStub = sinon.stub(userActions, 'setCurrrentUser').resolves({});
    loginRegisteredUserStub = sinon.stub(userActions, 'loginRegisteredUser').resolves({});
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
    userActions.setCurrrentUser.restore();
    userActions.loginRegisteredUser.restore();
  });
  it('should render without throwing an error', function () {
    wrapper = shallow(<Login {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

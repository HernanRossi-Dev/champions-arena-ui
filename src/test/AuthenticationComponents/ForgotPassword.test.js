import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { ForgotPassword } from '../../js/components/AuthenticateUser/ForgotPassword';
import * as API from '../../js/apiUtils/userApiHelpers';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('A suite', function () {
  let getAuthTokenStub, fetchUserStub, wrapper, props;
  beforeEach(() => {
    getAuthTokenStub = sinon.stub(API, 'getAuthToken').resolves('FakeAuthToken');
    fetchUserStub = sinon.stub(API, 'fetchUser').resolves({});
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
    API.getAuthToken.restore();
    API.fetchUser.restore();
  });
  it('should render without throwing an error', function () {
    wrapper = shallow(<ForgotPassword {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

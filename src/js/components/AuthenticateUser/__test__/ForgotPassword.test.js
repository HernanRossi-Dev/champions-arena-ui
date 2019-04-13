import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { ForgotPassword } from '../ForgotPassword';
import * as API from '../../../apiUtils/userApiHelpers';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Forgotpassword test suite', function () {
  let getAuthTokenStub, fetchUserStub, wrapper, props;
  beforeEach(() => {
    getAuthTokenStub = sinon.stub(API, 'getAuthToken').resolves('FakeAuthToken');
    fetchUserStub = sinon.stub(API, 'fetchUser').resolves({});
    props = {
      classes: {}
    };
  });
  afterEach(() => {
    API.getAuthToken.restore();
    API.fetchUser.restore();
  });

  it('should exist', function () {
    expect(ForgotPassword).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<ForgotPassword {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

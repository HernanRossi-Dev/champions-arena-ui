import '@babel/polyfill';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { ForgotPassword } from '../ForgotPassword';
import * as API from '../../../apiUtils/userApiHelpers';

Enzyme.configure({ adapter: new Adapter() });

describe('Forgotpassword test suite', () => {
  let getAuthTokenStub;
  let fetchUserStub;
  let wrapper;
  let props;
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

  it('should exist', () => {
    expect(ForgotPassword).to.exist;
  });

  it('should render without throwing an error', () => {
    wrapper = shallow(<ForgotPassword {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

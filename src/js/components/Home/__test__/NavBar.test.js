import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { NavBarComponent } from '../NavBarComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as UserActionCreators from '../../../actions/UserActionCreators';

Enzyme.configure({ adapter: new Adapter() });

describe('NavBarComponent test suite', function () {
  let UserGuestStub, UserRegisteredStub, wrapper, props;
  beforeEach(() => {
    UserGuestStub = sinon.stub(UserActionCreators, 'logoutGuestUser').resolves('FakeAuthToken');
    UserRegisteredStub = sinon.stub(UserActionCreators, 'logoutRegisteredUser').resolves('FakeAuthToken');
    props = {
      dispatch: () => {},
      history: {
          push: () => {},
      },
      isGuest: false,
    };
  });
  afterEach(() => {
    UserActionCreators.logoutGuestUser.restore();
    UserActionCreators.logoutRegisteredUser.restore();

  });

  it('should exist', function () {
    expect(NavBarComponent).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<NavBarComponent {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

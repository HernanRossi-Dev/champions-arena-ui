import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { Signup } from '../Signup';
import * as userActions from '../../../actions/UserActionCreators';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Signup component test suite', function () {
  let createRegisteredUserStub, wrapper, props;
  beforeEach(() => {
    createRegisteredUserStub = sinon.stub(userActions, 'createRegisteredUser').resolves({});
    props = {
      classes: {}
    };
  });
  afterEach(() => {
    userActions.createRegisteredUser.restore();
  });

  it('should exist', function () {
    expect(Signup).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<Signup {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

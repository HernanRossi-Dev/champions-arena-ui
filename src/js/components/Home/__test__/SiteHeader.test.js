import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { SiteHeaderComponent } from '../SiteHeaderComponent';
import store from "../../../store/index";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('SiteHeaderComponent test suite', function () {
  let storeStub, wrapper, props;
  beforeEach(() => {
    const storeResult = {
      userReducer: {
        loggedIn: true
      }
    }
    storeStub = sinon.stub(store, 'getState').returns(storeResult);
  });
  afterEach(() => {
    store.getState.restore();
  });

  it('should exist', function () {
    expect(SiteHeaderComponent).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<SiteHeaderComponent />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

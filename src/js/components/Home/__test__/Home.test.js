import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { HomeComponent } from '../HomeComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('HomeComponent test suite', function () {
  let wrapper, props;
  it('should exist', function () {
    expect(HomeComponent).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<HomeComponent />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

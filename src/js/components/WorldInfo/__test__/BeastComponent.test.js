import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { BeastComponent } from '../BeastComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('BeastComponent test suite', function () {
  let wrapper, props;
  beforeEach(() => {
    props = {
      classes: {},
    };
  });
  afterEach(() => {
  });

  it('should exist', function () {
    expect(BeastComponent).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<BeastComponent {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

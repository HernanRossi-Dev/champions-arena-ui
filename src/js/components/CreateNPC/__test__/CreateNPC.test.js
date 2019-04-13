import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { CreateNPCComponent } from '../CreateNPCComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('CreateNPCComponent test suite', function () {
  let wrapper, props;
  beforeEach(() => {
    props = {
      classes: {},
    };
  });
  afterEach(() => {
  });

  it('should exist', function () {
    expect(CreateNPCComponent).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<CreateNPCComponent {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

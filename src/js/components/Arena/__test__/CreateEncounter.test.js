import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { CreateEncounter } from '../CreateEncounter';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('CreateEncounter test suite', function () {
  it('should exist', function () {
    expect(CreateEncounter).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<CreateEncounter />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

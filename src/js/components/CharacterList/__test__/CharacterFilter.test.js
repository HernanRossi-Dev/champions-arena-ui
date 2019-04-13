import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { CharacterFilter } from '../CharacterFilter';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('CharacterFilter test suite', function () {
  const props = {
    initFilter: '',
    setFilter: () => { },
  };
  let wrapper;
  it('should exist', function () {
    expect(CharacterFilter).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<CharacterFilter {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

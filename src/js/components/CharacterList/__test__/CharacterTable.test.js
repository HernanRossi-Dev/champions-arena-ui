import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { CharacterTable } from '../CharacterTable';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  deleteCharacter: () => { },
  characters: []
};
let wrapper;

describe('CharacterTable test suite', function () {
  it('should exist', function () {
    expect(CharacterTable).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<CharacterTable {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

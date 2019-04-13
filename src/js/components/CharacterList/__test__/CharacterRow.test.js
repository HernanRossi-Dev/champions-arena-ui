import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { CharacterRow } from '../CharacterRow';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  deleteCharacter: () => { },
  character: {}
};
let wrapper;

describe('CharacterRow test suite', function () {
  it('should exist', function () {
    expect(CharacterRow).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<CharacterRow {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

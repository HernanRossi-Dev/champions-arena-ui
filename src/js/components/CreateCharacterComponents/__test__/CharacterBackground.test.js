import '@babel/polyfill';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { CharacterBackgroundComponent } from '../CharacterBackgroundComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Character Background test suite', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      setBackground: () => {}
    };
  });
  afterEach(() => {
  });

  it('should exist', () => {
    expect(CharacterBackgroundComponent).to.exist;
  });

  it('should render without throwing an error', () => {
    wrapper = shallow(<CharacterBackgroundComponent {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

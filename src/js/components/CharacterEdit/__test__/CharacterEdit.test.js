import '@babel/polyfill';
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import uuid from 'uuid';
import axios from 'axios';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CharacterEdit } from '../CharacterEdit';
import Character from '../characterModel';

Enzyme.configure({ adapter: new Adapter() });

describe('CharacterEdit test suite', () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      classes: {},
      match: {
          params: {
              id: uuid.v4()
          },
      },
    };
  });

  it('should exist', () => {
    expect(CharacterEdit).to.exist;
  });

  it('should render without throwing an error', () => {
    wrapper = shallow(<CharacterEdit {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

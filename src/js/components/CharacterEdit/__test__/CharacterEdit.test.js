import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { CharacterEdit } from '../CharacterEdit';
import Character from '../characterModel';
import uuid from 'uuid';
import axios from 'axios';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('CharacterEdit test suite', function () {
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
  afterEach(() => {
  });

  it('should exist', function () {
    expect(CharacterEdit).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<CharacterEdit {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

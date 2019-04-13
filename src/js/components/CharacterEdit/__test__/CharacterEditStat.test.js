import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { CharacterEditStatsComponent } from '../CharacterEditStatsComponent';
import Character from '../characterModel';
import uuid from 'uuid';
import axios from 'axios';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('CharacterEditStatsComponent test suite', function () {
  let wrapper, props;
  beforeEach(() => {
    props = {
      classes: {},
      editCharacter: new Character(),
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
    expect(CharacterEditStatsComponent).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<CharacterEditStatsComponent {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

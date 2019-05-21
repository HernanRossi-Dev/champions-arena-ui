import '@babel/polyfill';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { CreateCharacter20StatsComponent } from '../CreateCharacter20StatsComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('CreateCharacter20StatsComponent test suite', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      characterStats: {
        STR: 15,
        DEX: 15,
        CON: 15,
        INT: 15,
        WIS: 15,
        CHA: 15,
      },
      freeAbilityPoints: 0,
      racialBonus: 0,
      backgroundBoost: 0,
      classBoost: 0,
    };
  });
  afterEach(() => {
  });

  it('should exist', () => {
    expect(CreateCharacter20StatsComponent).to.exist;
  });

  it('should render without throwing an error', () => {
    wrapper = shallow(<CreateCharacter20StatsComponent {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

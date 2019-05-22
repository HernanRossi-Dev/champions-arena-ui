import '@babel/polyfill';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { CreateCharacterAlignmentComponent } from '../CreateCharacterAlignmentComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('CreateCharacterAlignmentComponent test suite', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      updateAlignment: () => {},
      allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
      charClass: 'Fighter'
    };
  });
  afterEach(() => {
  });

  it('should exist', () => {
    expect(CreateCharacterAlignmentComponent).to.exist;
  });

  it('should render without throwing an error', () => {
    wrapper = shallow(<CreateCharacterAlignmentComponent {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

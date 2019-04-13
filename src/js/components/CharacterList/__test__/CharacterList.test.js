import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import * as CharActions from '../../../actions/CharacterActionCreators';
import { expect } from 'chai';
import { CharacterList } from '../CharacterList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  location: {
    search: () => { },
    query: () => { },
  }
};

describe('CharacterList test suite', function () {
  let setNumberOfCharactersStub, wrapper;
  beforeEach(() => {
    setNumberOfCharactersStub = sinon.stub(CharActions, 'setNumberOfCharacters').resolves('FakeAuthToken');
  });

  afterEach(() => {
    CharActions.setNumberOfCharacters.restore();
  });

  it('should exist', function () {
    expect(CharacterList).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<CharacterList {...props} />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

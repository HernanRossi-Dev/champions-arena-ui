import '@babel/polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { CreateCampaign } from '../CreateCampaign';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('CreateCampaign test suite', function () {
  it('should exist', function () {
    expect(CreateCampaign).to.exist;
  });

  it('should render without throwing an error', function () {
    wrapper = shallow(<CreateCampaign />, { disableLifecycleMethods: true });
    expect(wrapper.length).to.equal(1);
  });
});

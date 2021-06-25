import React from 'react';
import { shallow } from 'enzyme';
import { IndexPage } from '../pages/index';
import Head from '../components/head';

describe('IndexPage', () => {
  it('shallow renders', () => {
    const wrapper = shallow(<IndexPage posts={ [] } />);
    expect(wrapper.find(Head)).toHaveLength(1);
  });
});

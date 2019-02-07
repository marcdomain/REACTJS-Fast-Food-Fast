import React from 'react';
import { shallow } from 'enzyme';
import Buttons from '../../components/homepage/HomepageCTA';

let props;

const setup = () => {
  props = {
    toggleAuth: true,
  };
  return shallow(<Buttons {...props} />);
};

describe('This test the available food component', () => {
  const wrapper = setup();

  it('test the orderHistory component', () => {
    const count = wrapper.find('button');
    expect(count.length).toBe(2);
  });
});

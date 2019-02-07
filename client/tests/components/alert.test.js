import React from 'react';
import { shallow } from 'enzyme';
import AlertMessage from '../../components/userAuth/Alert';

let props;

const setup = () => {
  props = {
    displayMessageStatus: true,
  };
  return shallow(<AlertMessage {...props} />);
};

describe('This test the available food component', () => {
  const wrapper = setup();

  it('test the orderHistory component', () => {
    const count = wrapper.find('div');
    expect(count.length).toBe(1);
  });

  it('test the orderHistory component', () => {
    wrapper.setProps({
      displayMessageStatus: false,
    })
    const count = wrapper.find('div');
    expect(count.length).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import UserAuth from '../../components/userAuth';

let props;

const setup = () => {
  props = {
    authModalName: {
      includes: jest.fn(),
    }
  };
  return shallow(<UserAuth {...props} />);
};

describe('This test the available food component', () => {
  const wrapper = setup();

  it('test the orderHistory component', () => {
    const count = wrapper.find('.modal');
    expect(count.length).toBe(1);
  });
});

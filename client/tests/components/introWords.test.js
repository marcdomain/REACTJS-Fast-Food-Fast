import React from 'react';
import { shallow } from 'enzyme';
import IntroWords from '../../components/homepage/IntroWords';

let props;

const setup = () => {
  props = {
    authModalName: {
      includes: jest.fn(),
    }
  };
  return shallow(<IntroWords {...props} />);
};

describe('This test the available food component', () => {
  const wrapper = setup();

  it('test the orderHistory component', () => {
    const count = wrapper.find('.intro-words');
    expect(count.length).toBe(1);
  });
});

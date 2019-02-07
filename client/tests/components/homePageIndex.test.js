import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../components/homepage';

let props;

const setup = () => {
  props = {
    toggleMessage: jest.fn(),
    history: {
      push: jest.fn()
    }
  };
  return shallow(<Homepage {...props} />);
};

describe('This test the available food component', () => {
  const wrapper = setup();
  const action = wrapper.instance();

  it('', () => {
    const welcome = wrapper.find('.welcome');
    expect(welcome.length).toBe(1);
  });

  it('test the orderHistory component', () => {
    const event = {
      currentTarget: {
        id: 1,
      },
      target: {
        id: 1,
      },
    };
    const toggleAuth = jest.spyOn(action, 'toggleAuth');
    action.toggleAuth(event);
    expect(toggleAuth).toBeCalled();
  });

  it('test the orderHistory component', () => {
    const event = {
      currentTarget: 1,
      target: 1,
    };
    const toggleAuth = jest.spyOn(action, 'toggleAuth');
    action.toggleAuth(event);
    expect(toggleAuth).toBeCalled();
  });
});

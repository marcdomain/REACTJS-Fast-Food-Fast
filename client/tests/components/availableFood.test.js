import React from 'react';
import { shallow, } from 'enzyme';
import { AvailableFood } from '../../components/AvailableFood';

let props;

const setup = () => {
  props = {
    history: [],
    getAvailableFood: jest.fn(),
    orderUpdate: jest.fn(),
    items: [
      {
        id: 1,
        menu: 'ice coke',
        description: 'very chilled drink',
        category: 'drinks',
        imageUrl: 'lol',
        quantity: 120,
        pricce: 200
      }
    ],
    cartItems: [
      {
        menu: 'coke',
        amount: 500,
        quantity: 400
      }
    ]
  };
  return shallow(<AvailableFood {...props} />);
};

describe('This test the available food component', () => {
  const wrapper = setup();
  const action = wrapper.instance();

  it('test the app component', () => {
    const count = wrapper.find('header');

    expect(count.length).toBe(1);
  });

  it('Logout a user', () => {
    wrapper.find('.logout').simulate('click');
  });

  it('Should not add item to cart', () => {
    const addToCartForm = jest.spyOn(action, 'addToCart');
    action.addToCart({ preventDefault: () => 1 });
    expect(addToCartForm).toBeCalled();
  });

  it('Should add item to cart', () => {
    const addToCartForm = jest.spyOn(action, 'addToCart');
    action.addToCart({ preventDefault: () => 1 });
    expect(addToCartForm).toBeCalled();
  });

  it('Handle change in quantity', () => {
    const event = {
      target: {
        name: 'quantity',
        value: 2
      }
    };
    action.onChangeInput(event);
    expect(action.state.quantity).toEqual(2);
  });
});

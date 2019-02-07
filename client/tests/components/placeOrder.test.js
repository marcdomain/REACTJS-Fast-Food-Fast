import React from 'react';
import { shallow } from 'enzyme';
import { PlaceOrder } from '../../components/PlaceOrder';

let props;

const setup = () => {
  props = {
    deliveryLocation: '',
    total: 50000,
    showCart: false,
    placeOrderAction: jest.fn(),
    orderUpdate: jest.fn(),
  };
  return shallow(<PlaceOrder {...props} />);
};


describe('This test the available food component', () => {
  const wrapper = setup();

  it('test the app component', () => {
    const count = wrapper.find('.cart-modal');
    expect(count.length).toBe(1);
  });
});

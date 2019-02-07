import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../routers/AppRouter';

describe('Test the Approuter', () => {
  it('test the app component', () => {
    const wrapper = shallow(<AppRouter />);
    const count = wrapper.find('BrowserRouter');
    expect(count.length).toEqual(1);
  });
});

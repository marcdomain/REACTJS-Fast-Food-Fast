import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../components/homepage/Container';

describe('Tests for homepage component', () => {
  it('Test the container component', () => {
    const wrapper = shallow(<Container />);
    const welcomeText = wrapper.find('h1');
    expect(welcomeText.length).toEqual(1);

    const deliveryGirl = wrapper.find('.delivery-girl');
    expect(deliveryGirl.length).toEqual(1);

    const introWords = wrapper.find('.intro-content');
    expect(introWords.length).toEqual(1);
  });
});

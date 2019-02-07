import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps } from '../../components/userAuth/Login';

let props;

const setup = () => {
  props = {
    loginUser: jest.fn(),
    history: {
      push: jest.fn(),
    }
  };
  return shallow(<Login {...props} />);
};

describe('This test the available food component', () => {
  const wrapper = setup();
  const action = wrapper.instance();

  it('test the app component', () => {
    const count = wrapper.find('.auth-form');
    expect(count.length).toBe(1);
  });

  it('test onchange event', () => {
    const email = wrapper.find('#email1');
    email.at(0).simulate('change', { target: { name: 'email', value: 'hello'}})
    expect(wrapper.state().email).toEqual('hello');
  });

  it('Handle submit', () => {
    const handleSubmit = jest.spyOn(action, 'handleSubmit');
    action.handleSubmit({ preventDefault: () => 1 });
    expect(handleSubmit).toBeCalled();
  });

  it('should call mapStateToProps', () => {
    const state = {
      auths: {
        response: {
          message: 'me',
          status: 'me',
        }
      }
    };
    expect(mapStateToProps(state)).toEqual({ displayMessage: 'me', displayMessageStatus: 'me' });
  });
});

import authReducers from '../../reducers/authReducers';
import { LOG_IN, SIGN_UP, RESET_AUTH_MESSAGE } from '../../actions/types';

describe('Test for auth reducers', () => {
  const initialState = {
    response: {}
  };

  it('signup user with the right action', () => {
    expect(authReducers({ ...initialState }, { type: SIGN_UP, payload: 'Signed up' })).toEqual({
      response: 'Signed up'
    });
  });

  it('login user with the right action', () => {
    expect(authReducers({ ...initialState }, { type: LOG_IN, payload: 'Logged in' })).toEqual({
      response: 'Logged in'
    });
  });

  it('signup/login user with the right action', () => {
    expect(authReducers({ ...initialState }, { type: RESET_AUTH_MESSAGE })).toEqual({
      response: {}
    });
  });

  it('default', () => {
    expect(authReducers({ ...initialState }, { type: null })).toEqual({
      response: {}
    });
  });
});

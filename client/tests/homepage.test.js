import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SIGN_UP, LOG_IN } from '../actions/types';
import { baseURL } from '../utils';
import { loginUser, SignupNewUser } from '../actions/auth';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('unit test 1', () => {
  beforeEach(() => {
    fetchMock.restore();
    store = mockStore({});
  });

  it('should sign up user', () => {
    fetchMock.post(`${baseURL}/auth/signup`, {
      response: {
        message: 'success',
        token: 'njbuvfd6567uiojhgfd',
      }
    });

    const actions = [{
      type: SIGN_UP,
      payload: {
        response: {
          message: 'success',
          token: 'njbuvfd6567uiojhgfd',
        }
      }
    }];
    const signupInputs = {
      name: 'marcmarc',
      email: 'marc@gmail.com',
      phone: '08094929829',
      address: '23, andela andele',
      password: 'marcmarc'
    };
    return store.dispatch(SignupNewUser(signupInputs))
      .then(() => {
        expect(store.getActions()).toEqual(actions);
      });
  });

  it('should login a user', () => {
    fetchMock.post(`${baseURL}/auth/login`, {
      response: {
        message: 'success',
        token: 'njbuvfd6567uiojhgfd',
      }
    });
    
    const loginAction = [{
      type: LOG_IN,
      payload: {
        response: {
          message: 'success',
          token: 'njbuvfd6567uiojhgfd',
        }
      }
    }];
    const loginInputs = {
      email: 'marc@gmail.com',
      password: 'marcmarc'
    };
    return store.dispatch(loginUser(loginInputs))
      .then(() => {
        expect(store.getActions()).toEqual(loginAction);
      });
  });
});

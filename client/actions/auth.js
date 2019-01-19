import { baseURL, setToken } from '../utils';
import { SIGN_UP, LOG_IN } from './types';

const fetchAuth = (data, url) => fetch(`${baseURL}/auth/${url}`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(res => res.json());

const SignupNewUser = signupData => (dispatch) => {
  fetchAuth(signupData, 'signup')
    .then((response) => {
      if (!response.status) {
        setToken(response.token);
      }
      dispatch({ type: SIGN_UP, payload: response });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const loginUser = loginData => (dispatch) => {
  fetchAuth(loginData, 'login')
    .then((response) => {
      dispatch({ type: LOG_IN, payload: response });
      if (!response.status) {
        setToken(response.token);
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export {
  loginUser,
  SignupNewUser
};

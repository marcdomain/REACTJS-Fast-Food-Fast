import { baseURL, setToken } from '../utils';
import { SIGN_UP, LOG_IN } from './types';

const fetchAuth = (data, url) => fetch(`${baseURL}/auth/${url}`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(res => res.json());

const SignupNewUser = signupData => dispatch => fetchAuth(signupData, 'signup')
  .then((response) => {
    if (!response.status) {
      setToken(response.token);
    }
    return dispatch({ type: SIGN_UP, payload: response });
  })
  .catch((error) => {
    console.log(error);
  });

const loginUser = loginData => dispatch => fetchAuth(loginData, 'login')
  .then((response) => {
    if (!response.status) {
      setToken(response.token);
    }
    return dispatch({ type: LOG_IN, payload: response });
  })
  .catch((error) => {
    console.log(error.message);
  });

export {
  loginUser,
  SignupNewUser
};

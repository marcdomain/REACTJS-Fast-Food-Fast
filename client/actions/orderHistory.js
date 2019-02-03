import { baseURL, getToken } from '../utils';
import { ORDER_HISTORY } from './types';

const getOrderHistory = userId => (dispatch) => {
  fetch(`${baseURL}/users/${userId}/orders`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
      Authorization: getToken()
    }
  })
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: ORDER_HISTORY, payload: data.orderHistory });
    })
    .catch((error) => {
      console.log('ERROR', error);
    });
};

export default getOrderHistory;

import { DELETE_ORDER } from './types';
import { baseURL, getToken } from '../utils';

const deleteOrder = orderId => (dispatch) => {
  fetch(`${baseURL}/orders/${orderId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: getToken()
    }
  })
    .then(res => res.json())
    .then((data) => {
      dispatch({ type: DELETE_ORDER, payload: data });
    })
    .catch((error) => {
      console.log('ERROR', error);
    });
};

export default deleteOrder;

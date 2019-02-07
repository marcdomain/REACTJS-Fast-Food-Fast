import { PLACE_ORDER, ORDER_UPDATE } from './types';
import { baseURL, getToken } from '../utils';

const placeOrderAction = order => dispatch => fetch(`${baseURL}/orders`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: getToken()
  },
  body: JSON.stringify(order)
})
  .then(res => res.json())
  .then((data) => {
    dispatch({ type: PLACE_ORDER, payload: data });
  })
  .catch((error) => {
    console.log(error.message);
  });

export const orderUpdate = data => ({ type: ORDER_UPDATE, payload: data });

export default placeOrderAction;

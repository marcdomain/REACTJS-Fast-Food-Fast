import { AVAILABLE_FOOD } from './types';
import { baseURL } from '../utils';

const getAvailableFood = () => (dispatch) => {
  fetch(`${baseURL}/menu`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    }
  })
    .then(data => data.json())
    .then((res) => {
      dispatch({ type: AVAILABLE_FOOD, payload: res.allMenu });
    })
    .catch((e) => {
      console.log('CATCH ERRORS', e.message);
    });
};

export default getAvailableFood;

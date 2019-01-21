import { AVAILABLE_FOOD } from './types';
import { baseURL } from '../utils';

const getAvailableFood = () => (dispatch) => {
  console.log('TRY FETCHING');
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
      console.log('SEE MENU', res);
    })
    .catch((e) => {
      console.log('CATCH ERRORS', e);
    });
};

export default getAvailableFood;

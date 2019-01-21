import { combineReducers } from 'redux';
import authReducers from './authReducers';
import foodReducers from './foodReducers';

export default combineReducers({
  auths: authReducers,
  availableFood: foodReducers,
});

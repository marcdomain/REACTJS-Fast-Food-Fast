import { combineReducers } from 'redux';
import authReducers from './authReducers';
import foodReducers from './foodReducers';
import cartReducers from './cartReducer';

export default combineReducers({
  auths: authReducers,
  availableFood: foodReducers,
  placeOrder: cartReducers,
});

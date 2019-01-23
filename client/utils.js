import jwtDecode from 'jwt-decode';

const herokuURL = 'https://marcus-fast-food-fast.herokuapp.com/api/v1';
const baseURL = 'http://localhost:5030/api/v1';

const setToken = token => localStorage.setItem('token', token);
const getToken = () => localStorage.getItem('token');
const removeToken = () => localStorage.removeItem('token');
const setCartInStorage = orderItems => localStorage.setItem('orderItems', orderItems);
const getCartInStorage = () => localStorage.getItem('orderItems');
const removeCartInStorage = () => localStorage.removeItem('orderItems');
const decoded = jwtDecode(getToken());

export {
  baseURL,
  herokuURL,
  setToken,
  getToken,
  removeToken,
  setCartInStorage,
  getCartInStorage,
  removeCartInStorage,
  decoded
};

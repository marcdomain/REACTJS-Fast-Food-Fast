import jwtDecode from 'jwt-decode';

const baseURL = 'http://localhost:5030/api/v1';
// const baseURL = 'https://marcus-fast-food-fast.herokuapp.com/api/v1';

const setToken = token => localStorage.setItem('token', token);
const getToken = () => localStorage.getItem('token');
const removeToken = () => localStorage.removeItem('token');
const setCartInStorage = orderItems => localStorage.setItem('orderItems', orderItems);
const getCartInStorage = () => localStorage.getItem('orderItems');
const removeCartInStorage = () => localStorage.removeItem('orderItems');

let decode;

try {
  decode = jwtDecode(getToken());
} catch (error) {
  decode = '';
}

const decoded = decode;


export {
  baseURL,
  setToken,
  getToken,
  removeToken,
  setCartInStorage,
  getCartInStorage,
  removeCartInStorage,
  decoded
};

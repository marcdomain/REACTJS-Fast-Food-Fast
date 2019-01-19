
const herokuURL = 'https://marcus-fast-food-fast.herokuapp.com/api/v1';
const baseURL = 'http://localhost:5030/api/v1';

const setToken = token => localStorage.setItem('token', token);
const getToken = () => localStorage.getItem('token');
const removeToken = () => localStorage.removeItem('token');

export {
  baseURL,
  herokuURL,
  setToken,
  getToken,
  removeToken
};

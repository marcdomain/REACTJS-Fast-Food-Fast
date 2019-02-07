import {
  setToken, getToken,
  setCartInStorage, getCartInStorage, removeCartInStorage
} from '../utils';

const testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo2LCJuYW1lIjoidXNlcm5hbWUiLCJlbWFpbCI6InVzZXJuYW1lQGdtYWlsLmNvbSIsInBob25lIjoiMDgwMTExMTExMTExIiwiYWRkcmVzcyI6IkFuZGVsYSBFUElDIFRvd2VyIiwicGFzc3dvcmQiOiIkMmIkMTAkRVhMZGdKcXROallUUzJBLzhtRTZ3ZWF3RjB6ZWNWWDI2QlZ5UU5uSnl0VVNac2VOaGhiWHkiLCJ1c2VydHlwZSI6InVzZXIifSwiaWF0IjoxNTQ5NTUxNDczfQ.ODeGLbPOra4EJYmPI8jq1djrXJTNL73Caz-IyfKOfK8';
test('Test for auth utils', () => {
  expect(setToken('fake-token')).toBe(undefined);
  expect(getToken()).toBe('fake-token');

  expect(setCartInStorage(['cart'])).toBe(undefined);
  expect(getCartInStorage()).toBe('cart');
  removeCartInStorage();
  expect(getCartInStorage()).toBe(null);
});

export default testToken;

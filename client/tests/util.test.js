import { setToken, getToken, removeToken } from '../utils';

test('Test for auth utils', () => {
  expect(setToken('bad-token')).toBe(undefined);
  expect(getToken()).toBe('bad-token');
  removeToken();
  expect(getToken()).toBe(null);
});

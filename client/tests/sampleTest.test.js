const numFunc = (a, b) => (a > b ? 'first arg is greater' : 'second arg is greater');

test('should return the greater argument of numFunc', () => {
  const testResult = numFunc(3, 5);
  expect(testResult).toBe('second arg is greater');
});

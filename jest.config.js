

module.exports = {
  setupFiles: ['<rootDir>/client/tests/setupTests.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverageFrom: [
    'client/**/*.{js,jsx}',
    '!client/store/index.js',
    '!client/components/PlaceOrder.js',
    '!client/components/OrderHistory.js',
    '!client/components/AvailableFood.js'
  ],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/client/tests/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/client/tests/mocks/styleMock.js',
  },
};

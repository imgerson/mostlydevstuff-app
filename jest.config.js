module.exports = {
  setupFiles: ['./test/setup.js'],
  collectCoverageFrom: ['**/*.js'],
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  }
};

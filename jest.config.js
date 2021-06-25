module.exports = {
  setupFiles: ['./test/setup.js'],
  collectCoverageFrom: ['**/*.js'],
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '@fontsource/libre-franklin': 'identity-obj-proxy',
    '@fontsource/roboto': 'identity-obj-proxy'
  }
};

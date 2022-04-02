/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
  moduleDirectories: ['node_modules', 'src'],
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.ts',
    '@testing-library/jest-native/extend-expect'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!react-native-payfort-sdk|react-native)/'
  ]
};

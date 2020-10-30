module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/__setup__/setup-tests.js',
  ],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/style-mock.js',

    // aliases
    '^@root(.*)$': '<rootDir>$1',
    '^@src(.*)$': '<rootDir>/src$1',
    '^@public(.*)$': '<rootDir>/public$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@pages(.*)$': '<rootDir>/src/components/pages$1',
    '^@hoc(.*)$': '<rootDir>/src/components/hoc$1',
    '^@containers(.*)$': '<rootDir>/src/containers$1',
    '^@reducers(.*)$': '<rootDir>/src/reducers$1',
    '^@actions(.*)$': '<rootDir>/src/actions$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@images(.*)$': '<rootDir>/public/img$1',
    '^@locales(.*)$': '<rootDir>/public/locales$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },
};
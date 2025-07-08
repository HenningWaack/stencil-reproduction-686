module.exports = {
  testEnvironment: '@happy-dom/jest-environment',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]s?$",
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!vue)'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.esm-bundler.js',
  },
};
// jest.config.js
export default {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Use babel-jest to handle ES6 modules
  },
  testEnvironment: "node", // Ensure Node.js is used as the test environment
};

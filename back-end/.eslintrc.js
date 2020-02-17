module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  plugins: [
    "eslint-config-standard",
    "eslint-plugin-import",
    "eslint-plugin-node",
    "eslint-plugin-promise",
    "eslint-plugin-standard"
  ],
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {}
};

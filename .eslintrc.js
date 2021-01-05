module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    "no-alert": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-spaced-func": 0,
    "no-multi-spaces": 0,
    "no-control-regex": 0,
    "no-useless-escape": 0,
    "no-unneeded-ternary": 0,
    "no-prototype-builtins": 0,
    "no-irregular-whitespace": 0,
    "no-multiple-empty-lines": 0,
    semi: 0,
    indent: 0,
    quotes: 0,
    "eol-last": 0,
    "quote- props": 0,
    "semi-spacing": 0,
    "spaced-comment": 0,
    "space-in-parens": 0,
    "space-unary-ops": 0,
    "linebreak-style": [0, "windows"],
    "space-before-blocks": 0,
    "object-curly-spacing": 0,
    "space-return-throw-case": 0,
    "space-before-function-paren": 0
  }
};

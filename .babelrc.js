module.exports = {
  presets: [["@babel/preset-env", { modules: false }]],
  plugins: [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-bigint",
    [
      "@babel/plugin-transform-runtime",
      { corejs: false, helpers: true, regenerator: true, useESModules: true }
    ]
  ],
  ignore: ["dist"]
};

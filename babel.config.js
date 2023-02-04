module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript"],

  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3
      }
    ],
    "@vue/babel-plugin-jsx"
  ]
};

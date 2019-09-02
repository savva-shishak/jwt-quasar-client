module.exports = {
  presets: [
    '@quasar/babel-preset-app',
    '@babel/preset-env'
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}

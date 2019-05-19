'use strict'

const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function(env) {
  const defaultRules = [
    {
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: require.resolve('eslint-loader'),
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [require.resolve('babel-loader')],
    },
  ]

  const defaultPlugins = [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
    }),
  ]

  return {
    mode: env,
    entry: paths.appSrc,
    output: {
      path: paths.appBuild,
      filename: '[name].js',
    },
    module: {
      rules: defaultRules,
    },
    plugins: defaultPlugins,
  }
}

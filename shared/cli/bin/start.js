'use strict'

const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const { createCompiler } = require('../lib/compiler')
const webpackConfig = require('../lib/webpackConfig')
const configWebpackDevServer = require('../lib/configWebpackDevServer')
const { HOST, DEFAULT_PORT } = require('../lib/host')

function init() {
  const config = webpackConfig('development')
  const compiler = createCompiler({ config, webpack })
  const devServer = new WebpackDevServer(
    compiler,
    configWebpackDevServer,
  )

  devServer.listen(DEFAULT_PORT, HOST, err => {
    if (err) console.log(chalk.red(err))
  })
}

module.exports = {
  init,
}

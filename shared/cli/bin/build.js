'use strict'

const webpack = require('webpack')
const { createCompiler } = require('../lib/compiler')
const webpackConfig = require('../lib/webpackConfig')

function init() {
  const config = webpackConfig('production')
  const compiler = createCompiler({ config, webpack })
  return new Promise((resolve, reject) => {
    compiler.run((error, stats) => {
      if (error) reject(error)
      return resolve({ stats })
    })
  })
}

module.exports = {
  init,
}

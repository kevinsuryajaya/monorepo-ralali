'use strict'

const path = require('path')

const rootDirectory = process.cwd()

const resolveApp = filename => path.resolve(rootDirectory, filename)

module.exports = {
  appRoot: rootDirectory,
  appBuild: resolveApp('build'),
  appSrc: resolveApp('src/index.js'),
  appHtml: resolveApp('public/index.html'),
}

const babelConfig = require('babel-config')

module.exports = function(api) {
  api.cache(true)
  return babelConfig()
}

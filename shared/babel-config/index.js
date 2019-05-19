'use strict'

function babelConfig() {
  return {
    presets: [
      require.resolve('@babel/preset-env'),
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-flow'),
    ],
  }
}

module.exports = babelConfig

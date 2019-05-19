'use strict'

function createCompiler({ config, webpack }) {
  let compiler
  try {
    compiler = webpack(config)
  } catch (error) {
    console.error(error || error.message)
  }

  return compiler
}

module.exports = {
  createCompiler,
}

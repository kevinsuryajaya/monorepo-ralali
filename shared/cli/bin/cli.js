#!/usr/bin/env node

'use strict'

const program = require('commander')
const start = require('./start')
const build = require('./build')

program.option('-s --scripts', 'run all scripts').parse(process.argv)

if (program.scripts) {
  if (process.argv[3] === 'start') start.init()
  if (process.argv[3] === 'build') build.init()
}

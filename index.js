#! /usr/bin/env node
const fs    = require('fs')
const utils =  require('./utils')
const exec  = require('child_process').exec
const argv  = require('minimist')(process.argv.slice(2))
const path  = process.argv.slice(2)[0]

const child = exec('touch ' + path, (err, stdout, stderr) => {
  if (err) console.log(err)
  const name = utils.getFilename(path)
  const options = utils.getOptionsByName(argv.options)
  const nameWithoutExt = utils.removeExtension(name)
  fs.writeFile(path, utils.template(nameWithoutExt, options), (err) => {
    if (err) console.log(err)
  })
})

#! /usr/bin/env node
const fs    = require('fs')
const utils =  require('./utils')
const exec  = require('child_process').exec
const argv  = require('minimist')(process.argv.slice(2))
const path  = process.argv.slice(2)[0]

const child = exec('touch ' + path, (err, stdout, stderr) => {
  if (err) console.log(err)

  let options
  let name
  let nameWithoutExt
  console.log('args', argv)
  name = utils.getFilename(path)
  if (argv.options)
    options = utils.getOptionsByName(argv.options)

  if (argv.t) 
    utils.generateTest()

  nameWithoutExt = utils.removeExtension(name)
  

  fs.writeFile(path, utils.template(nameWithoutExt, options), (err) => {
    if (err) console.log(err)
  }) 
})

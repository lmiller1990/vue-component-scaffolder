#! /usr/bin/env node
const fs    = require('fs')
const utils =  require('./utils')
const exec  = require('child_process').exec
const argv  = require('minimist')(process.argv.slice(2))
const path  = process.argv.slice(2)[0]

const writeToFile = (path, templateFn, ext, options = null) => {
  path = path + ext
  const child = exec('touch ' + path, (err, stdout, stderr) => {
    if (err) {
      console.log(err)
    }

    let opts
    let name
    let nameWithoutExt

    if (options) {
      opts = utils.getOptionsByName(argv.options)
    }

    name = utils.getFilename(path)
    nameWithoutExt = utils.removeExtension(name)

    fs.writeFile(path, templateFn(nameWithoutExt, opts), (err) => {
      if (err) console.log(err)
    }) 
  })
}

writeToFile(path, utils.template, '.vue', argv.options)

if (argv.t) {
  writeToFile(path, utils.testTemplate, '.test.js', argv.options)
}

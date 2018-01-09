#! /usr/bin/env node
const fs    = require('fs')
const utils =  require('./utils')
const exec  = require('child_process').exec
const argv  = require('minimist')(process.argv.slice(2))
const path  = process.argv.slice(2)[0]
  /*
const child = exec('touch ' + path, (err, stdout, stderr) => {
  if (err) {
    console.log(err)
  }

  console.log(argv)
  let options
  let name
  let nameWithoutExt

  name = utils.getFilename(path)
  if (argv.options) {
    options = utils.getOptionsByName(argv.options)
  }

  nameWithoutExt = utils.removeExtension(name)
  options = argv.options !== undefined ? utils.getOptionsByName(argv.options) : undefined
  nameWithoutExt = utils.removeExtension(name)

  fs.writeFile(path, utils.template(nameWithoutExt, options), (err) => {
    if (err) {
      console.log(err)
    } 
  }) 

  if (argv.t) {
    console.log('test!')
    fs.writeFile(path, utils.testTemplate(nameWithoutExt), (err) => {
      if (err) console.log(err)
    }) 
  }
})*/

const writeToFile = (path, templateFn, ext) => {
  path = path + ext
  const child = exec('touch ' + path, (err, stdout, stderr) => {
    if (err) {
      console.log(err)
    }

    let name
    let nameWithoutExt

    name = utils.getFilename(path)
    nameWithoutExt = utils.removeExtension(name)

    fs.writeFile(path, templateFn(nameWithoutExt), (err) => {
      if (err) console.log(err)
    }) 
  })
}

writeToFile(path, utils.template, '.vue')

if (argv.t) {
  writeToFile(path, utils.testTemplate, '.test.js')
}

#! /usr/bin/env node
const fs    = require('fs')
const utils =  require('./utils')
const exec  = require('child_process').exec
const path  = process.argv.slice(2)[0]

const child = exec('touch ' + path, (err, stdout, stderr) => {
  if (err) console.log(err)
  const name = utils.getFilename(path)
  fs.writeFile(path, utils.template(name), (err) => {
    if (err) console.log(err)
  })
})




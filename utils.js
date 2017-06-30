const api = require('./vueApi')

const getFilename = (arg) => {
  const arr = arg.split('/')
  return arr[arr.length - 1]
}

const getOptionsByName = (options) => {
  const opts = options.split(',')
  let allOptions = ''
  for (let o in opts) {
    allOptions = allOptions.concat(api[opts[o]] + ',\n\n') 
  }

  return allOptions.substring(0, allOptions.length - 3) // remove hanging comma
}

const removeExtension = (name) => {
  return name.split('.')[0]
}

const addPadding = (lines, spaces) => {
  const lineByLine = lines.split('\n')
  let running = ''

  for (let l in lineByLine) {
    running = running.concat(new Array(spaces).join(' ') + lineByLine[l]) 
    console.log(lineByLine.length - 1, l)
    if (parseInt(l) === lineByLine.length - 1) {
      // nothing
    } else {
      running += '\n'
    }
  }

  return running
}

const template = (name, options) => {
  const t = 
`<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: '${name}'${options !== undefined ? ',\n\n' + (addPadding(options, 5)) : ''}
  }
</script>

<style scoped>
</style>`

  return t
}
exports.getFilename = getFilename
exports.template = template
exports.removeExtension = removeExtension
exports.getOptionsByName = getOptionsByName

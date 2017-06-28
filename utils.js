const getFilename = (arg) => {
  const arr = arg.split('/')
  return arr[arr.length - 1]
}

const removeExtension = (name) => {
  return name.split('.')[0]
}

const template = (name) => {
  const t = 
`<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: '${name}'
  }
</script>

<style scoped>
</style>`

  return t
}
exports.getFilename = getFilename
exports.template = template
exports.removeExtension = removeExtension

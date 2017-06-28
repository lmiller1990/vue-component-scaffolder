const getFilename = (arg) => {
  const arr = arg.split('/')
  return arr[arr.length - 1]
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

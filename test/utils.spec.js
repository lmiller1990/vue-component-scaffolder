const expect = require('chai').expect
const utils  = require('../utils')

describe('getFilename()', () => {
  it('should extract name including extension from a path including a directory', () => {
    const args = 'test/test.vue'

    const path = utils.getFilename(args)

    expect(path).to.equal('test.vue')
  })

  it('should extract name including extension from a path including multi level directory', () => {
    const args = 'test/nested/test.vue'

    const path = utils.getFilename(args)

    expect(path).to.equal('test.vue')
  })

  it('should extract from a path which is a filename only', () => {
    const args = 'test.vue'

    const path = utils.getFilename(args)

    expect(path).to.equal('test.vue')
  })
})

describe('template()', () => {
  it('generates the correct template with name', () => {
    const expectedTemplate = 
`<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: 'Test'
  }
</script>

<style scoped>
</style>`
    const result = utils.template('Test')

    expect(result).to.equal(expectedTemplate)
  })
})

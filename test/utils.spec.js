const expect = require('chai').expect
const utils  = require('../utils')

describe('removeExtension()', () => {
  it('removes the extension from a file with an extension', () => {
    const withExt = 'test.vue'

    const without = utils.removeExtension(withExt)

    expect(without).to.equal('test')
  })

  it('removes the extension from a file without an extension', () => {
    const withExt = 'test'

    const without = utils.removeExtension(withExt)

    expect(without).to.equal('test')
  })
})

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
    const name = utils.removeExtension('Test.vue')
    const result = utils.template(name)

    expect(result).to.equal(expectedTemplate)
  })
})

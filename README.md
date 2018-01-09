A npm based cli tool to generate vue components.

#### Installation

`npm install -g vue-component-scaffold` 

#### Use

`vc Scrollbar`

will generate the following:

```
<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: 'Scrollbar'
  }
</script>

<style scoped>
</style>
```

#### options

Using the `--options` argument, you can have lifecycle options and dta options. For example `vc MyTest --options=props,created,mounted`  will produce the following:

```html
<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: 'MyTest',

    props: {
    },

    created () {
    },

    mounted () {
    }
  }
</script>

<style scoped>
</style>
```

#### test

Passing the `-t` argument will generate a test (assumes you are using [`vue-test-utils`](https://github.com/vuejs/vue-test-utils), the official library for testing Vue components).

`vc MyComponent -t` will generate:

```js
import { shallow } from 'vue-test-utils'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders', () => {
    const wrapper = shallow(MyComponent)
  })
})
```

To develop: run the tests with `npm run test`. Adding new features? Add a test and make a PR. Or an issue and I'll add it. Contributions are welcome!

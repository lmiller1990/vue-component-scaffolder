A npm based cli tool to generate vue components.

#### Installation

`npm install -g vue-component-scaffold` 

#### Use

`vc Scrollbar.vue`

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

Using the `--options` argument, you can have lifecycle options and dta options. For example `MyTest.vue --options props,created,mounted`  will produce the following:

```
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

To develop: run the tests with `npm run test`. Adding new features? Add a test and make a PR. Or an issue and I'll add it.

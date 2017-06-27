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

More args to come!

To develop: run the tests with `npm run test`. Adding new features? Add a test and make a PR.

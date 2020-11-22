<template>
  <v-navigation-drawer
    app
    v-model='value'
    clipped
  >
    Goodbye World!
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "fpSideBar",
  props: {
    value: {
      type: Boolean
    }
  }
}
</script>
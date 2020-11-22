<template>
  <v-app-bar 
    app
    clipped-left
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click="showSidebar = !showSidebar"></v-app-bar-nav-icon>
    <v-toolbar-title><v-icon left>mdi-account-box-outline</v-icon>Family Photos</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "fpAppBar",
  props: {
    sidebarVisible: {
      type: Boolean
    },
  },
  computed: {
    showSidebar: {
      get() {
        return this.sidebarVisible
      },
      set(v) {
        this.$emit("update:sidebarVisible", v)
      }
    }
  }
}
</script>
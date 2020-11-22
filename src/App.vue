<template>
<v-app>
  <fp-app-bar :sidebarVisible.sync='sidebarVisible'></fp-app-bar>
  <fp-side-bar v-model='sidebarVisible'></fp-side-bar>
  <v-main>
    <v-container>
      Hello World
    </v-container>
  </v-main>
  <fp-footer></fp-footer>
</v-app>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      sidebarVisible: false
    }
  }
}
</script>

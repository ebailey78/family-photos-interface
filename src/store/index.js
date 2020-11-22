import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistance from 'vuex-persist'

const vuexLocal = new VuexPersistance({
  storage: window.localStorage,
  key: process.env.VUE_APP_VUEX_KEY,
})

import auth from "./auth"

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {}
})

store.registerModule('user', auth)

export default store
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '../store'

axios.defaults.baseURL=process.env.VUE_APP_API_BASE_URL

axios.interceptors.request.use(
  function (config) {
    if(store.getters['user/loggedIn']) {
      config.headers.Authorization = `Bearer ${store.getters['user/token']}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

Vue.use(VueAxios, axios)


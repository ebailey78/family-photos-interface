import jwt_decode from 'jwt-decode'
import Vue from 'vue'

const state = {
  token: null
}

const mutations = {
  SET_TOKEN: (state, payload) => state.token = payload 
}

const actions = {
  async login(context, credentials) {
    try {
      let authorization = "Basic " + btoa(`${credentials.username}:${credentials.password}`)
      let resp = await Vue.axios.post("authenticate", {}, {
        headers: {
          Authorization: authorization
        }
      })
      context.commit("SET_TOKEN", resp.data)
    } catch(err) {
      if(err.response.status == '401') throw new Error("Incorrect Username or Password")
    }
  }
}

const getters = {
  token: state => state.token,
  payload: state => jwt_decode(state.token),
  scope: (state, getters) => getters.payload.scope.split(" "),
  loggedIn: state => !!state.token
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
import Vue from 'vue'
import Vuex from 'vuex'
import firebase, { auth, GoogleProvider } from '@/services/fireinit.js'
import { firebaseMutations, firebaseAction } from 'vuexfire'
Vue.use(Vuex)
require('whatwg-fetch')
const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      account: null
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      ...firebaseMutations,
      setUser(state, user) {
        state.user = user
      },
      SET_USER: function(state, user) {
        state.user = user
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.authUser) {
          commit('SET_USER', req.session.authUser)
        }
      },
      autoSignIn({ commit }, payload) {
        commit('setUser', payload)
      },
      signInWithEmail({ commit }, account) {
        return firebase
          .auth()
          .signInWithEmailAndPassword(account.email, account.password)
          .then(user => {
            commit('SET_USER', user)
          })
        // .then(user => {
        //   console.log(user)
        //   state.user = user
        //   // return this.dispatch('setUser', user)
        // })
      },
      resetUser({ commit }) {
        commit('SET_USER', null)
        window.location.reload()
      },
      userLogout({ state }) {
        var self = this
        return firebase
          .auth()
          .signOut()
          .then(() => {
            self.dispatch('resetUser')
          })
      }
    }
  })
}

export default createStore

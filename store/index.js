import Vue from 'vue'
import Vuex from 'vuex'
import firebase, { auth, GoogleProvider } from '@/services/fireinit.js'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import { getUserFromCookie, getUserFromSession } from '@/helpers'
Vue.use(Vuex)
if (process.env.IS_BROWSER) {
  require('whatwg-fetch')
}
const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
      // account: null
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
      async nuxtServerInit({ dispatch }, { req }) {
        const user = getUserFromCookie(req)
        if (user) {
          await dispatch('modules/user/setUSER', {
            name: user.name,
            email: user.email,
            uid: user.user_id
          })
        }
      },
      // nuxtServerInit({ commit }, { req }) {
      //   if (req.session && req.session.authUser) {
      //     commit('SET_USER', req.session.authUser)
      //   }
      // },
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
        // this.$nuxt.$loading.start()
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

import Vuex from 'vuex'
import firebase, { auth, GoogleProvider } from '@/services/fireinit.js'
import { firebaseMutations, firebaseAction } from 'vuexfire'

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

    actions: {
      autoSignIn({ commit }, payload) {
        commit('setUser', payload)
      },
      signInWithEmail({ state }, account) {
        return firebase
          .auth()
          .signInWithEmailAndPassword(account.email, account.password)
          .then(user => {
            console.log(user)
            state.user = user
            // return this.dispatch('setUser', user)
          })
      },
      resetUser({ state }) {
        state.user = null
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
    },
    mutations: {
      ...firebaseMutations,
      setUser(state, user) {
        state.user = user
      }
    }
  })
}

export default createStore

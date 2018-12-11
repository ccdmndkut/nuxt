import Vuex from 'vuex'
import firebase, { auth, GoogleProvider } from '@/services/fireinit.js'

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
      setUser(state, payload) {
        state.user = payload
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
            return this.dispatch('setUser', user)
          })
      },

      signOut({ commit }) {
        auth
          .signOut()
          .then(() => {
            commit('setUser', null)
          })
          .catch(err => console.log(error))
      }
    }
  })
}

export default createStore

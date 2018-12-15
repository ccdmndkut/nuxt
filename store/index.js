import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      authUser: null,
      count: 'Go to eBenefits',
      storeMsg: 'Did you mean eBenefits.va.gov?',
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    },
    getters: {
      doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      },
      strRepeat: state => {
        return state.storeMsg.repeat(201)
      },
      strRepeatCount: (state, getters) => {
        var c = getters.strRepeat
        return c.length
      }
    },
    mutations: {
      SET_USER: function(state, user) {
        state.authUser = user
      },
      increment(state) {
        state.count++
      }
    },
    actions: {
      // nuxtServerInit is called by Nuxt.js before server-rendering every page
      nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.authUser) {
          commit('SET_USER', req.session.authUser)
        }
      },
      async login({ commit }, { username, password }) {
        try {
          const { data } = await axios.post('/api/login', {
            username,
            password
          })
          commit('SET_USER', data)
        } catch (error) {
          if (error.response && error.response.status === 401) {
            throw new Error('Bad credentials')
          }
          throw error
        }
      },

      async logout({ commit }) {
        await axios.post('/api/logout')
        commit('SET_USER', null)
      },
      increment({ commit }) {
        commit('increment')
      }
    }
  })
}

export default createStore

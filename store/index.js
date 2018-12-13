import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      count: 'Go to eBenefits',
      storeMsg: 'Did you mean eBenefits.va.gov',
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
      increment(state) {
        state.count++
      }
    },
    actions: {
      increment({ commit }) {
        commit('increment')
      }
    }
  })
}

export default createStore

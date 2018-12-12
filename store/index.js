import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      count: 1,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    },
    getters: {
      doneTodos: state => {
        return state.todos.filter(todo => todo.done)
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

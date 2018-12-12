import { auth } from '@/services/fireinit.js'

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        return resolve(store.commit('setUser', user))
      }
      return resolve()
    })
  })
}

// import firebase from 'firebase/app'

// export default function({ store, redirect, route }) {
//   if (firebase.auth().currentUser) {
//     return redirect('/locked')
//   }
// }

export default function({ store, redirect, route }) {
  store.state.user != null && route.name == 'login' ? redirect('/') : ''
  store.state.user == null ? redirect('/login') : ''
}

// function isAdminRoute(route) {
//   if (route.matched.some(record => record.path == '/locked')) {
//     return true
//   }
// }

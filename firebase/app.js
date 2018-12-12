import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: 'AIzaSyDMbILM1a366tYFM3-nOLwCUXapJ8ETqmw',
  authDomain: 'vaclaims-194006.firebaseapp.com',
  databaseURL: 'https://vaclaims-194006.firebaseio.com',
  projectId: 'vaclaims-194006',
  storageBucket: 'vaclaims-194006.appspot.com',
  messagingSenderId: '524576132881'
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase

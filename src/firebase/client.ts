import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

if (!firebase.apps.length) {
  firebase.initializeApp(require('../../firebase.client.key.json'))
}

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export { firebase, auth, db, storage }

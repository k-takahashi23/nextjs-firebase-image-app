import * as admin from 'firebase-admin'

export default admin.initializeApp({
  credential: admin.credential.cert(require('../../firebase.admin.key.json'))
})

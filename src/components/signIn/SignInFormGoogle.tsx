import React from 'react'
import { firebase } from '../../firebase/client'

const SignInFormGoogle: React.FC = () => {

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  return (
    <>
      <div>
        <button onClick={() => googleLogin()}>Googleアカウントでログイン</button>
      </div>
    </>
  )
}

export default SignInFormGoogle
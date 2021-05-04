import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import SignInFormGoogle from '../components/organisms/SignInFormGoogle'
import NoHeaderTemplate from '../components/templates/NoHeaderTemplate'
import { useCurrentUser } from '../hooks/useCurrentUser'

const LoginPage = () => {
  const { currentUser } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push('/');
    }
  }, [currentUser])

  return (
    <>
      <NoHeaderTemplate>
        <h2>ログインページ</h2>
        <SignInFormGoogle />
      </NoHeaderTemplate>
    </>
  )
}

export default LoginPage
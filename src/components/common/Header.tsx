import React from 'react'
import Link from 'next/link'
import { auth } from '../../firebase/client'
import { useRouter } from 'next/router';
import { useCurrentUser } from '../../hooks/useCurrentUser';

const Header: React.FC = () => {
  const { setCurrentUser } = useCurrentUser();
  const router = useRouter();

  const logout = () => {
    auth.signOut();
    setCurrentUser(undefined);
    router.push('/login')
  }

  return (
    <>
      <header>
        <nav>
        <Link href="/">
          <a>ホーム</a>
        </Link>{' '}
        |{' '}
        <Link href="/account">
          <a>アカウントページ</a>
        </Link>{' '}
        <button onClick={() => logout()}>ログアウト</button>
        </nav>
      </header>
    </>
  )
}

export default Header

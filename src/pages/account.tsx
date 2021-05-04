import LoginedTemplate from '../components/common/LoginedTemplate'
import { useRequireLogin } from '../hooks/useRequireLogin';

const AccountPage = () => {
  useRequireLogin();
  
  return (
    <>
      <LoginedTemplate>
        <h2>アカウントページ</h2>
        TODO
      </LoginedTemplate>
    </>
  )
}

export default AccountPage

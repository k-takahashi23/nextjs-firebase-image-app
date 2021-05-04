import LoginedTemplate from '../components/templates/LoginedTemplate';
import FileUploadForm from '../components/organisms/FileUploadForm';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useRequireLogin } from '../hooks/useRequireLogin'
import React from 'react';
import PostItemList from '../components/organisms/PostItemList';

const HomePage = () => {
  useRequireLogin();

  const { currentUser } = useCurrentUser();

  return (
    <>
      <LoginedTemplate>
        <h2>ホーム</h2>
        <h3>ようこそ {currentUser?.displayName} さん</h3>
        <FileUploadForm />
        <PostItemList />
        TODO
      </LoginedTemplate>
    </>
  )
}

export default HomePage
import LoginedTemplate from '../components/common/LoginedTemplate';
import FileUploadForm from '../components/fileUpload/FileUploadForm';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useRequireLogin } from '../hooks/useRequireLogin'
import React from 'react';
import PostItemList from '../components/post/PostItemList';

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
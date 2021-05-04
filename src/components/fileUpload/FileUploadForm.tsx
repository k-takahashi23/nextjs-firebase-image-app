import React, { useState } from 'react'
import { storage } from '../../firebase/client';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { PostsFactory } from '../../backend/domain/factories';
import { PostsRepository } from '../../backend/infrastructure/repositories';

const FileUploadForm: React.FC = () => {
  const { currentUser } = useCurrentUser();
  const [fileName, setFileName] = useState<string>('');
  const [file, setFile] = useState<File | undefined>(undefined);
  
  const textOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  }

  const fileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null && e.target.files[0] !== null) {
      setFile(e.target.files[0]);
    }
  }

  const handleUpload = async () => {
    if (fileName === '' || file === undefined) {
      alert('ファイルが選択されていません');
      return;
    }
    
    if (file && currentUser && currentUser.displayName) {
      // Post作成
      const post = PostsFactory.create(fileName, fileName, currentUser.displayName);
      // DB保存
      const postsRepository = new PostsRepository();
      await postsRepository.add(post);
      // アップロード
      const storageRef = storage.ref();
      const fileRef = storageRef.child(post.id);
      const uploadTask =  fileRef.put(file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          console.log('snapshot', snapshot)
        },
        (error) => {
          console.log('err', error)
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL)
            alert('アップロードが完了しました。')
            setFile(undefined);
            setFileName('');
            // TODO: 選択したファイルをリセットする
          })
        }
      )
    }
  };

  return (
    <>
      <div>
        <div>
          登録名: <input
            type="text"
            value={fileName}
            onChange={(e) => textOnChange(e)}
          />
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            autoComplete="off"
            onChange={(e) => fileOnChange(e)}
          />
        </div>
        <div>
          <button
            onClick={() => handleUpload()}
          >
            アップロード
          </button>
        </div>
      </div>
    </>
  )
}

export default FileUploadForm

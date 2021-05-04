import React, { useEffect } from 'react'
import { Post } from '../../backend/domain/entities';
import { storage } from '../../firebase/client';

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }: Props) => {

  useEffect(() => {
    showImage();
  }, []);

  const showImage = () => {
    console.log('showImage')
    const storageRef = storage.ref();
    const fileRef = storageRef.child(post.id);
    fileRef.getDownloadURL().then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (_event) => {
        const blob = xhr.response;
        console.log(blob)
        const img = document.getElementById(post.id) as HTMLImageElement;
        img.src = url;
      };
      xhr.open('GET', url);
      xhr.send();
    }).catch((err) => {
      console.error(err);
    });
  }
  
  const download = () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(post.id);
    fileRef.getDownloadURL().then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (_event) => {
        const blob = xhr.response;
        const aDL = document.createElement('a');
        aDL.href = URL.createObjectURL(blob);
        aDL.textContent = 'download link';
        aDL.setAttribute('download', post.filename);
        aDL.click();
      };
      xhr.open('GET', url);
      xhr.send();
    }).catch((err) => {
      console.error(err);
    });
  }

  return (
    <>
      <hr />
      <div style={{ margin: '10px' }}>
        <h4>{ post.displayname }</h4>
        <div>投稿者: { post.username }</div>
        <img id={post.id} style={{ width: '100%' }} />
        <div>
          <button onClick={() => download()}>ダウンロード</button>
        </div>
      </div>
    </>
  )
}

export default PostItem
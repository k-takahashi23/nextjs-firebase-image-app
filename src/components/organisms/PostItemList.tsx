import React from 'react'
import { usePosts } from '../../hooks/usePosts'
import PostItem from './PostItem';

const PostItemList: React.FC = () => {
  const { isLoading, posts } = usePosts();

  return (
    <>
      { !isLoading &&
        <>
          { posts?.map(post => (
            <PostItem post={post} /> 
          ))}
        </>
      }
    </>
  )
}

export default PostItemList
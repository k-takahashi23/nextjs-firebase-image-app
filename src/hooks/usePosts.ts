import { useEffect, useState } from 'react'
import { Post } from '../modules/entities';
import { PostsRepository } from '../modules/repositories';

export const usePosts = (): {
  isLoading: boolean
  posts: Post[] | undefined
} => {
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);
  const isLoading = posts === undefined;

  useEffect(() => {
    const findAll = async () => {
      const postsRepository = new PostsRepository();
      const allPosts = await postsRepository.findAll();
      setPosts(allPosts);
    }
    findAll();
  }, [])

  return { isLoading, posts }
}
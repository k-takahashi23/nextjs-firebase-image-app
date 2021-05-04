import { Post } from "../../domain/entities/post";
import { db } from "../../../firebase/client";

export interface IPostsRepository {
  findAll(): Promise<Post[]>;
  add(post: Post): Promise<void>;
}

export class PostsRepository implements IPostsRepository {
  private collectionName = "posts";

  public async findAll(): Promise<Post[]> {
    console.log('PostsRepository.findAll() invoked!');

    // TODO: エラーハンドリング
    const collectionRef = db.collection(this.collectionName);
    const querySnapshot = await collectionRef.get();
    let allPosts: Post[] = [];
    querySnapshot.forEach(documentSnapshot => {
      const data = documentSnapshot.data();
      const post: Post = {
        id: documentSnapshot.id,
        filename: data.filename,
        displayname: data.displayname,
        username: data.username,
      };
      allPosts.push(post);
    })
    return allPosts;
  }

  public async add(post: Post): Promise<void> {
    console.log('PostsRepository.add() invoked! post:', post);

    // TODO: エラーハンドリング
    const collectionRef = db.collection(this.collectionName);
    collectionRef.doc(post.id).set({
      filename: post.filename,
      displayname: post.displayname,
      username: post.username,
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }
}
import { v4 as uuid } from 'uuid';
import { Post } from "../entities"

export class PostsFactory {
  public static create = (
    filename: string,
    displayname: string,
    username: string
  ): Post => {
    return {
      id: uuid(),
      filename,
      displayname,
      username,
    }
  }
}
import { Comment } from './comment.model';

export class Post {
  private pictures!: Array<string>;
  private title!: string;
  private description!: string;
  private comments!: Array<Comment>;
  private totalPosts!: number;

  constructor(json?: any) {
    if (json != null) {
      this.pictures = json.pictures;
      this.title = json.title;
      this.description = json.description;
      this.totalPosts = json.totalPosts;
      this.comments = Comment.toArray(json.comments);
    }
  }

  /**
   * Used to built an array of this Model
   * @param jsons Arrays of posts.
   */
  static toArray(jsons: any[]): Post[] {
    const posts: Post[] = [];
    if (jsons != null) {
      for (const json of jsons) {
        posts.push(new Post(json));
      }
    }
    return posts;
  }
}
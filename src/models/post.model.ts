import { Comment } from './comment.model';

export class Post {
  public id!: number;
  public picture!: string[];
  public title!: string;
  public description!: string;
  public avatar!: string;
  public feedOwnerName!: string;
  public comments: Comment[];

  constructor(json?: any) {
    if (json != null) {
      this.id = json.id;
      this.picture = json.picture;
      this.title = json.title;
      this.description = json.description;
      this.avatar = json.avatar;
      this.feedOwnerName = json.feedOwnerName;
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
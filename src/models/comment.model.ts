export class Comment {
  public comment!: string;
  public commenterAvatar!: string;
  public commenterName!: string;

  constructor(json?: any) {
    if (json != null) {
      this.comment = json.comment;
      this.commenterAvatar = json.commenterAvatar;
      this.commenterName = json.commenterName;
    }
  }

  /**
   * Used to built an array of this Model.
   * @param jsons Arrays of comments.
   */
  static toArray(jsons: any[]): Comment[] {
    const comments: Comment[] = [];
    if (jsons != null) {
      for (const json of jsons) {
        comments.push(new Comment(json));
      }
    }
    return comments;
  }
}
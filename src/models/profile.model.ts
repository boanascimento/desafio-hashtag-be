import { Post } from './post.model';

export class Profile {
  public id!: string;
  public name!: string;
  public posts!: Post[];

  constructor(json?: any) {
    if (json != null) {
      this.name = json.name;
      this.id = json.id;
      this.posts = Post.toArray(json.posts);
    }
  }

  /**
   * Used to built an array of this Model.
   * @param jsons Arrays of profiles.
   */
  static toArray(jsons: any[]): Profile[] {
    const profiles: Profile[] = [];
    if (jsons != null) {
      for (const json of jsons) {
        profiles.push(new Profile(json));
      }
    }
    return profiles;
  }
}
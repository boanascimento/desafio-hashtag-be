import { BaseService } from './../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Profile } from 'src/models/profile.model';
import { Post } from 'src/models/post.model';

export abstract class IProfileService {
  abstract async getProfile(id: string): Promise<Profile>;
  abstract async getFeeds(): Promise<Post[]>;
}

@Injectable()
export class ProfileService extends BaseService implements IProfileService {
  private profileEP = "/profile";
  private feedsEP = "/feeds";
  constructor(
    protected translateService?: TranslateService,
    protected http?: HttpClient,
  ) {
    super();
  }

  /**
   * Used to get user profile.
   */
  public async getProfile(id: string): Promise<Profile> {
    return new Promise((resolv, reject) => {
      this.get(`${this.profileEP}/${id}`).subscribe((response: any) => {
        const res = new Profile(response);
        console.log('ProfileService -> res', res)
        resolv(res);
      }, error => {
        console.log("DiseaseService -> getProfile -> error", error)
        reject(false);
      }
      );
    });
  }


  /**
   * Used to get user profile.
   */
  public async getFeeds(): Promise<Post[]> {
    return new Promise((resolv, reject) => {
      this.get(this.feedsEP).subscribe((response: any) => {
        const res = Post.toArray(response);
        resolv(res);
      }, error => {
        console.log("ProfileService -> error -> getFeeds()", error)
        reject(false);
      }
      );
    });
  }
}

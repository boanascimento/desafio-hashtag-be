import { BaseService } from './../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Profile } from 'src/models/profile.model';

export abstract class IProfileService {
  abstract async getProfile(): Promise<Profile>;
}

@Injectable()
export class ProfileService extends BaseService implements IProfileService {
  private profileEP = "profile";
  constructor(
    protected translateService: TranslateService,
    protected http: HttpClient,
  ) {
    super();
  }

  /**
   * Used to get user profile.
   */
  public async getProfile(): Promise<Profile> {
    return new Promise((resolv, reject) => {
      this.get(this.profileEP).subscribe((response: any) => {
        const res = new Profile(response);
        resolv(res);
      }, error => {
          console.log("DiseaseService -> getProfile -> error", error)
          reject(false);
        }
      );
    });
  }
}

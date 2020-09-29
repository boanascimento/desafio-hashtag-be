import { BaseService } from './../base/base.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Profile } from 'src/models/profile.model';
import { Post } from 'src/models/post.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export abstract class IProfileService {
  abstract getProfile(id: string): Observable<Profile>;
  abstract getFeeds(): Observable<Post[]>;
}

@Injectable()
export class ProfileService extends BaseService implements IProfileService {
  private ep = {
    profile: "/profile",
    feeds: "/feeds"
  }
  constructor(
    protected translateService?: TranslateService,
    protected http?: HttpClient,
  ) {
    super();
  }

  /**
   * Used to get user profile.
   */
  public getProfile(id: string): Observable<Profile> {
    return this.get(`${this.ep.profile}/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }


  /**
   * Used to get user profile.
   */
  public getFeeds(): Observable<Post[]> {
    let posts: Array<Post>;
    return this.get(this.ep.feeds).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  /**
   * Informes an error.
   * @param error Error.
   */
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error ocurred by the client side
      errorMessage = error.error.message;
    } else {
      // Error ocurred by the server side
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}

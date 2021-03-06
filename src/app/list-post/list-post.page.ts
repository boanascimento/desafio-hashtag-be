import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/services/profile/profile.service';
import { Post } from 'src/models/post.model';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.page.html',
  styleUrls: ['./list-post.page.scss'],
})
export class ListPostPage implements OnInit {

  public feeds: Post[];

  constructor(private profileService?: ProfileService) { }

  ngOnInit() {
    Promise.all([
      this.getFeeds(),
    ]);
  }

  /**
   * Used to get the feed/posts
   */
  private async getFeeds() {
    const result = await this.profileService.getFeeds().catch(error => {
      console.log("ListPostComponent -> getFeeds -> error", error);
    }) as Post[];
    if (result) {
      this.feeds = result;
    }
  }
}

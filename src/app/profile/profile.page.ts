import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/models/profile.model';
import { ProfileService } from 'src/services/profile/profile.service';
import { ESegments } from './profile.enum';
import { ModalController } from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';
import { Post } from 'src/models/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public srcAvatar = '../assets/imgs/a5.png';
  public srcGridIcon = '../assets/icon/grid.png';
  public srcMarkedIcon = '../assets/icon/marked.png';

  public profile: Profile;

  public ownerPosts: boolean;
  public marckedPosts: boolean;
  public checkSegmentFor = ESegments;
  public setSegmentFor = ESegments;

  constructor(
    private profileService: ProfileService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    Promise.all([
      this.getProfile()
    ]);
    this.ownerPosts = true;
  }

  /**
   * Gets the user profile.
   */
  private async getProfile() {
    const result = await this.profileService.getProfile('1').catch(error => {
      console.log('ProfilePage -> getProfile -> error', error);
    }) as Profile;
    if (result) {
      this.profile = result;
      console.log('ProfilePage -> getProfile -> this.profile', this.profile)
    }
  }

  /**
   * Gets all segment events when it is changed.
   * @param ev Segment event.
   */
  segmentChanged(ev: any) {
    const setSegment = {
      ownerPosts: async () => {
        this.ownerPosts = true;
        this.marckedPosts = false;
      },
      marckedPosts: async () => {
        this.marckedPosts = true;
        this.ownerPosts = false;
      }
    }
    setSegment[ev.detail.value]();
  }

  /**
   * Opens a modal to see the post detail.
   */
  public async opnModal(post: Post) {
    const modal = await this.modalCtrl.create({
      component: DetailPage,
      componentProps: post
    });
    modal.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post.model';
import { ModalController, NavParams } from '@ionic/angular';
import { ModalCommentPage } from '../modal-comment/modal-comment.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public post: Post;

  public backButtonImg = 'assets/icon/back.png';

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    Promise.all([
      this.getParamsFromNavParams()
    ]);
  }

  /**
   * Retrievies all params sended by the previous page.
   */
  private async getParamsFromNavParams() {
    this.post = new Post(this.navParams.get('post'));
    this.post.avatar = this.navParams.get('avatar');
    this.post.feedOwnerName = this.navParams.get('feedOwnerName');
  }

  /**
   * Opens a modal to see the comments.
   */
  async openModalComment(comments: Component[]) {
    const modal = await this.modalCtrl.create({
      component: ModalCommentPage,
      componentProps: {
        'comments': comments
      }
    });
    modal.present();
  }

  /**
   * Closes the modal page.
   */
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}

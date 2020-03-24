import { OnInit, Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-comment',
  templateUrl: './modal-comment.page.html',
  styleUrls: ['./modal-comment.page.scss'],
})
export class ModalCommentPage implements OnInit {

  public comments: Comment[];

  public backButtonImg = 'assets/icon/back.png';

  constructor(
    private modalCtrl?: ModalController,
    private navParams?: NavParams
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
    this.comments = this.navParams.get('comments');
  }

  /**
   * Closes the modal page.
   */
  public dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}

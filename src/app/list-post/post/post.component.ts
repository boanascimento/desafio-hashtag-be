import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/models/post.model';
import { ModalController } from '@ionic/angular';
import { ModalCommentPage } from 'src/app/modal-comment/modal-comment.page';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() feed: Post;

  public srcCommentIcon = "assets/icon/icon-comment.png";
  public srcMoreOptionsIcon = "assets/icon/options.png";
  public srcLikeIcon = "assets/icon/like.png";

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {  }

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

}

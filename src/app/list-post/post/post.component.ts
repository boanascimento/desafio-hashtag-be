import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() feed: Post;

  public show: boolean;
  public srcCommentIcon = "assets/icon/icon-comment.png";

  constructor() { }

  ngOnInit() { }

  showComments() {
    this.show = !this.show;
  }

}

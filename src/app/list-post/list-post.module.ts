import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPostPage } from './list-post.page';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'list-post', component: ListPostPage }])
  ],
  declarations: [ListPostPage, PostComponent],
  exports: [ListPostPage, PostComponent]
})
export class ListPostPageModule {}

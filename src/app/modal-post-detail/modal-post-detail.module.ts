import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPostPageModule } from '../list-post/list-post.module';
import { ModalPostDetailPage } from './modal-post-detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListPostPageModule,
    RouterModule.forChild([{ path: 'detail', component: ModalPostDetailPage }])
  ],
  declarations: [ModalPostDetailPage],
  exports: [ModalPostDetailPage]
})
export class ModalPostDetailPageModule {}

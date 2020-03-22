import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalCommentPage } from './modal-comment.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'modal-comment', component: ModalCommentPage }])
  ],
  declarations: [ModalCommentPage],
  exports: [ModalCommentPage]
})
export class ModalCommentPageModule {}

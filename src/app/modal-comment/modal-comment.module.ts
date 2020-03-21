import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalCommentComponent } from './modal-comment.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'modal-comment', component: ModalCommentComponent }])
  ],
  declarations: [ModalCommentComponent],
  exports: [ModalCommentComponent]
})
export class ModalCommentComponentModule {}

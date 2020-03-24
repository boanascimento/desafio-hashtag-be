import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailPage } from './detail.page';
import { ListPostPageModule } from '../list-post/list-post.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListPostPageModule,
    RouterModule.forChild([{ path: 'detail', component: DetailPage }])
  ],
  declarations: [DetailPage],
  exports: [DetailPage]
})
export class DetailPageModule {}

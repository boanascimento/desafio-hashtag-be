import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPostComponent } from './list-post.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'list-post', component: ListPostComponent }])
  ],
  declarations: [ListPostComponent, PostComponent],
  exports: [ListPostComponent, PostComponent]
})
export class ListPostComponentModule {}

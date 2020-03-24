import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { DetailPageModule } from '../detail/detail.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetailPageModule,
    TranslateModule.forChild(),
    RouterModule.forChild([{ path: 'profile', component: ProfilePage }])
  ],
  declarations: [ProfilePage],
  exports: [ProfilePage]
})
export class ProfilePageModule {}

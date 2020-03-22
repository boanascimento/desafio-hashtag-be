import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { DetailPageModule } from '../detail/detail.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetailPageModule,
    RouterModule.forChild([{ path: 'profile', component: ProfilePage }])
  ],
  declarations: [ProfilePage],
  exports: [ProfilePage]
})
export class ProfilePageModule {}

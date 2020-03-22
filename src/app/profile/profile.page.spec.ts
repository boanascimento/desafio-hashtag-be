import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ProfileService } from '../../services/profile/profile.service';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailPageModule } from '../detail/detail.module';

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePage ],
      imports: [
        DetailPageModule,
        IonicModule.forRoot(), HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
          },
        }),
      ],
       providers: [
         ProfileService
       ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create and check if ownerPosts is true', () => {
    expect(component).toBeTruthy();
    expect(component.ownerPosts).toBeTruthy();
  });

  it('shot set the ownerPosts true and marckedPosts false', () => {
    const testMock = {
      detail: {
        value: "ownerPosts"
      }
    };
    component.segmentChanged(testMock);
    expect(component.ownerPosts).toBeTruthy();
    expect(component.marckedPosts).toBeFalsy();
  });

  it('shot set the ownerPosts false and marckedPosts true', () => {
    const testMock = {
      detail: {
        value: "marckedPosts"
      }
    };
    component.segmentChanged(testMock);
    expect(component.ownerPosts).toBeFalsy();
    expect(component.marckedPosts).toBeTruthy();
  });
});

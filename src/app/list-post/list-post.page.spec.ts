import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCommentPageModule } from '../modal-comment/modal-comment.module';
import { PostComponent } from './post/post.component';
import { ListPostPage } from './list-post.page';
import { ProfileService } from '../../services/profile/profile.service';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClient, HttpClientModule } from '@angular/common/http';

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

describe('ListPostPage', () => {
  let component: ListPostPage;
  let fixture: ComponentFixture<ListPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPostPage, PostComponent ],
      imports: [
        IonicModule.forRoot(),
        ModalCommentPageModule,
        HttpClientModule,
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

    fixture = TestBed.createComponent(ListPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

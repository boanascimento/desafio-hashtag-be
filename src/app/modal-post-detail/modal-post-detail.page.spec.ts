import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';

import { ListPostPageModule } from '../list-post/list-post.module';
import { ModalPostDetailPage } from './modal-post-detail.page';

describe('ModalPostDetailPage', () => {
  let component: ModalPostDetailPage;
  let fixture: ComponentFixture<ModalPostDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPostDetailPage],
      imports: [
        IonicModule.forRoot(),
        ListPostPageModule
      ],
      providers: [
        NavParams
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPostDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

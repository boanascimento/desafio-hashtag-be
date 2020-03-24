import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';

import { DetailPage } from './detail.page';
import { ListPostPageModule } from '../list-post/list-post.module';

describe('DetailPage', () => {
  let component: DetailPage;
  let fixture: ComponentFixture<DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPage],
      imports: [
        IonicModule.forRoot(),
        ListPostPageModule
      ],
      providers: [
        NavParams
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

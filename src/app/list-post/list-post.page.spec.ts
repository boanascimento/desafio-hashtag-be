import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPostPage } from './list-post.page';

describe('ListPostPage', () => {
  let component: ListPostPage;
  let fixture: ComponentFixture<ListPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

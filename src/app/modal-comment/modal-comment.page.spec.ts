import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCommentPage } from './modal-comment.page';

describe('ModalCommentPage', () => {
  let component: ModalCommentPage;
  let fixture: ComponentFixture<ModalCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

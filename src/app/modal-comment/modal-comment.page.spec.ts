import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';
import { ModalCommentPage } from './modal-comment.page';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


describe('ModalCommentPage', () => {
  let component: ModalCommentPage;
  let fixture: ComponentFixture<ModalCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCommentPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        CommonModule
      ],
      providers: [
        NavParams
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

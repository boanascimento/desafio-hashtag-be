import { ModalCommentPage } from "./modal-comment.po";

describe('new App', () => {
  let page: ModalCommentPage;

  beforeEach(() => {
    page = new ModalCommentPage();
  });

  it('should have tag id', () => {
    page.navigateTo();
    expect(page.getPageTagId()).toBeTruthy()
    
  });
});

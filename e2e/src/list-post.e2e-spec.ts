import { ListPostPage } from './list-post.po';

describe('new App', () => {
  let page: ListPostPage;

  beforeEach(() => {
    page = new ListPostPage();
  });

  it('should have css class', () => {
    page.navigateTo();
    expect(page.getPageCssClass()).toBeTruthy();
  });
});

import { ProfilePage } from './profile.po';

describe('new App', () => {
  let page: ProfilePage;

  beforeEach(() => {
    page = new ProfilePage();
    page.navigateTo();
  });

  it('should have the class row-header', () => {
    expect(page.getClassRowHeader()).toBeTruthy();
  });

  it('should have the class about', () => {
    expect(page.getClassAbout()).toBeTruthy();
  });

  it('should have the class row-segment', () => {
    expect(page.getClassRowSegment()).toBeTruthy();
  });

  it('should have the class row-own-post', () => {
    expect(page.getClassRowOwnPost()).toBeTruthy();
  });
});

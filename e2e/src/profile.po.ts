import { browser, by, element } from 'protractor';

export class ProfilePage {
  navigateTo() {
    return browser.get('/profile');
  }

  getClassRowHeader() {
    return element(by.className('row-header'));
  }

  getClassAbout() {
    return element(by.className('row-about'));
  }

  getClassRowSegment() {
    return element(by.className('row-segment'));
  }

  getClassRowOwnPost() {
    return element(by.className('row-own-post'))
  }
}

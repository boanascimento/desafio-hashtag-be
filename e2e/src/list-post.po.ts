import { browser, by, element } from 'protractor';

export class ListPostPage {
  navigateTo() {
    return browser.get('/list-post');
  }

  getPageCssClass() {
    return element(by.css('ion-no-padding'));
  }
}

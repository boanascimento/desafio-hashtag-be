import { browser, by, element } from 'protractor';

export class ModalCommentPage {
  navigateTo() {
    return browser.get('/modal-comment');
  }

  getPageTagId() {
    return element(by.id('btn-dismiss'));
  }
}

import { browser, by, element, protractor } from 'protractor';

export class ListPage {
  navigateTo() {
    browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('#menu'))), 5000);
    element(by.css('#menu')).click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('#book-list-link'))), 5000);
    element(by.css('#book-list-link')).click();
  }

  getTitleText() {
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }

  getFirstBookTitle() {
    return element(by.css('app-book-card mat-card-title')).getText() as Promise<string>;
  }

  getFirstBookSubTitle() {
    return element(by.css('app-book-card mat-card-subtitle')).getText() as Promise<string>;
  }

  getFirstBookDescription() {
    return element(by.css('app-book-card mat-card-content')).getText() as Promise<string>;
  }


}

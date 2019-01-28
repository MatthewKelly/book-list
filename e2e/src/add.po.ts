import { browser, by, element } from 'protractor';

export class AddPage {
  navigateTo() {
    return browser.get('/add-book') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }

  fillInTitle(title) {
    element(by.css('#title')).sendKeys(title);
  }

  fillInDescription(description) {
    element(by.css('#description')).sendKeys(description);
  }

  selectCategory(index) {
    element(by.css('#category')).click();
    element.all(by.css('mat-option')).get(index).click();
  }

  submitBook() {
    element(by.css('button.submit-button')).click();
  }

}

import { AddPage } from './add.po';
import { ListPage } from './list-po';
import { browser, logging } from 'protractor';

describe('workspace-project Book list app', () => {
  let addPage: AddPage;
  let listPage: ListPage;

  beforeEach(() => {
    addPage = new AddPage();
    listPage = new ListPage();
  });

  it('should add book to list', () => {
    addPage.navigateTo();
    expect(addPage.getTitleText()).toEqual('Add book');
    addPage.fillInTitle('book title');
    addPage.selectCategory(1);
    addPage.fillInDescription('book description');
    addPage.submitBook();
    browser.explore();
    listPage.navigateTo();
    expect(listPage.getTitleText()).toEqual('Book list ( 1 )');
    expect(listPage.getFirstBookTitle()).toEqual('Title: book title');
    expect(listPage.getFirstBookSubTitle()).toEqual('( Drama )');
    expect(listPage.getFirstBookDescription()).toEqual('Description: book description');
  });

  it('should not add book to list if form is invalid', () => {
    addPage.navigateTo();
    expect(addPage.getTitleText()).toEqual('Add book');
    addPage.fillInTitle('book title with long title long title title');
    addPage.fillInDescription('book description');
    addPage.selectCategory(1);
    addPage.submitBook();
    browser.explore();
    listPage.navigateTo();
    expect(listPage.getTitleText()).toEqual('Book list ( 0 )');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});

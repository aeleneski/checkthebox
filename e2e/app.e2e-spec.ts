import { ChecktheboxPage } from './app.po';

describe('checkthebox App', () => {
  let page: ChecktheboxPage;

  beforeEach(() => {
    page = new ChecktheboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { ShowUnlessAuthedPage } from './app.po';

describe('show-unless-authed App', () => {
  let page: ShowUnlessAuthedPage;

  beforeEach(() => {
    page = new ShowUnlessAuthedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

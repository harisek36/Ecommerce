import { ApplicationPortalUIPage } from './app.po';

describe('application-portal-ui App', () => {
  let page: ApplicationPortalUIPage;

  beforeEach(() => {
    page = new ApplicationPortalUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

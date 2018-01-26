import { DjustWebFrontendPage } from './app.po';

describe('djust-web-frontend App', () => {
  let page: DjustWebFrontendPage;

  beforeEach(() => {
    page = new DjustWebFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

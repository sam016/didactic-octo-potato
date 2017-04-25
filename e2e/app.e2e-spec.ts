import { RestoPOSPage } from './app.po';

describe('resto-pos App', () => {
  let page: RestoPOSPage;

  beforeEach(() => {
    page = new RestoPOSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

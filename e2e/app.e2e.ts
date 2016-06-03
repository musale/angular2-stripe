import { Angular2StripePage } from './app.po';

describe('angular2-stripe App', function() {
  let page: Angular2StripePage;

  beforeEach(() => {
    page = new Angular2StripePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-stripe works!');
  });
});

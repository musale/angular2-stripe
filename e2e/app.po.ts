export class Angular2StripePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-stripe-app h1')).getText();
  }
}

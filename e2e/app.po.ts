export class TheMirrorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('the-mirror-app h1')).getText();
  }
}

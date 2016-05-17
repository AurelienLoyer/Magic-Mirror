import { TheMirrorPage } from './app.po';

describe('the-mirror App', function() {
  let page: TheMirrorPage;

  beforeEach(() => {
    page = new TheMirrorPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('the-mirror works!');
  });
});

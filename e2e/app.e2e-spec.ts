import { AngularfinalPage } from './app.po';

describe('angularfinal App', function() {
  let page: AngularfinalPage;

  beforeEach(() => {
    page = new AngularfinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

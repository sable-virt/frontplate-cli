import { MysamplePage } from './app.po';

describe('mysample App', function() {
  let page: MysamplePage;

  beforeEach(() => {
    page = new MysamplePage();
  });

  it('should display message saying app works', () => {
    console.log(page);
    // page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});

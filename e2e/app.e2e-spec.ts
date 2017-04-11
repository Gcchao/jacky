import { JackyPage } from './app.po';

describe('jacky App', () => {
  let page: JackyPage;

  beforeEach(() => {
    page = new JackyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

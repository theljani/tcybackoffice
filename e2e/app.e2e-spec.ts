import { TcyBackOfficePage } from './app.po';

describe('tcy-back-office App', () => {
  let page: TcyBackOfficePage;

  beforeEach(() => {
    page = new TcyBackOfficePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

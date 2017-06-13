import { VergeblogPage } from './app.po';

describe('vergeblog App', () => {
  let page: VergeblogPage;

  beforeEach(() => {
    page = new VergeblogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

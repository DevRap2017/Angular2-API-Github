import { Angular2APIGithubPage } from './app.po';

describe('angular2-api-github App', function() {
  let page: Angular2APIGithubPage;

  beforeEach(() => {
    page = new Angular2APIGithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

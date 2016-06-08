import { FirebaseAuthPage } from './app.po';

describe('firebase-auth App', function() {
  let page: FirebaseAuthPage;

  beforeEach(() => {
    page = new FirebaseAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('firebase-auth works!');
  });
});

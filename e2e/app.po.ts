export class FirebaseAuthPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('firebase-auth-app h1')).getText();
  }
}

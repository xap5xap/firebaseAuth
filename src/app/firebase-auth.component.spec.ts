import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FirebaseAuthAppComponent } from '../app/firebase-auth.component';

beforeEachProviders(() => [FirebaseAuthAppComponent]);

describe('App: FirebaseAuth', () => {
  it('should create the app',
      inject([FirebaseAuthAppComponent], (app: FirebaseAuthAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'firebase-auth works!\'',
      inject([FirebaseAuthAppComponent], (app: FirebaseAuthAppComponent) => {
    expect(app.title).toEqual('firebase-auth works!');
  }));
});

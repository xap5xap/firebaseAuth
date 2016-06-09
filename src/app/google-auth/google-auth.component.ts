import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-google-auth',
  templateUrl: 'google-auth.component.html',
  styleUrls: ['google-auth.component.css']
})
export class GoogleAuthComponent implements OnInit {

  token: string;
  user: string;
  constructor() { }

  ngOnInit() {
  }

  signIn() {
    let provider: any = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(result =>
      // this.token = result.credential.accessToken;
      // this.user = result.user;
      console.log('dentro de then');
    if (result) {
      console.log(result.credential.accessToken);
      console.log(result.user);
    }
    );
  }
}

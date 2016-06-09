import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-mail-auth',
  templateUrl: 'mail-auth.component.html',
  styleUrls: ['mail-auth.component.css']
})
export class MailAuthComponent implements OnInit {
  userString: string = "bla";
  constructor() { }
  usuario: string;
  pass:sting;

  signOut(){
    firebase.auth().signOut();
  }

  signInMail(){
    firebase.auth().signInWithEmailAndPassword(this.usuario, this.pass);
  }

  ngOnInit() {
    // firebase.auth().onAuthStateChanged(this.handleUser);
    firebase.auth().onAuthStateChanged(user =>
        if(user) {
      console.log('existe user');
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var refreshToken = user.refreshToken;
      var providerData = user.providerData;
      this.userString = JSON.stringify({
        displayName: displayName,
        email: email,
        emailVerified: emailVerified,
        photoURL: photoURL,
        isAnonymous: isAnonymous,
        uid: uid,
        refreshToken: refreshToken,
        providerData: providerData
      }, null, '  ');
      console.log(this.userString);
    }
    else {
      console.log('no existe user');
      console.log(this.userString);
    }
      );
  }

  handleUser(user: any) {
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var refreshToken = user.refreshToken;
      var providerData = user.providerData;
      // this.userString = JSON.stringify({
      //   displayName: displayName,
      //   email: email,
      //   emailVerified: emailVerified,
      //   photoURL: photoURL,
      //   isAnonymous: isAnonymous,
      //   uid: uid,
      //   refreshToken: refreshToken,
      //   providerData: providerData
      // }, null, '  ');
      // this.userString = "usuario";
      console.log(this.userString);
    }
    else {
      // this.userString = "Not loged in";
      console.log(this.userString);
    }
  }
}

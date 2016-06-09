import { Component } from '@angular/core';
import {GoogleAuthComponent} from './google-auth';
import {MailAuthComponent} from './mail-auth';


@Component({
  moduleId: module.id,
  selector: 'firebase-auth-app',
  templateUrl: 'firebase-auth.component.html',
  styleUrls: ['firebase-auth.component.css'],
  directives: [GoogleAuthComponent, MailAuthComponent]
})
export class FirebaseAuthAppComponent {
  title = 'firebase-auth works!';
}

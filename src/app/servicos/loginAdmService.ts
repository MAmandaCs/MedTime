import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseService } from './databaseService';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginAdmService {

    posto: Observable<firebase.User>;
    private postoDetails: firebase.User;

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.posto = afAuth.authState;
        this.posto.subscribe(
      (pst) => {
        if (PopStateEvent) {
          this.postoDetails = pst;
        } else {
          this.postoDetails = null;
        }
      }
    );
    }

    public login(email: string, senha: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, senha);

  }

    public criarUser(email: string, senha: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, senha);

    }

    public logout() {
        return this.afAuth.auth.signOut();
    }
    isLoggedIn() {
        if (this.postoDetails === null) {
          return false;
        } else {
          return true;
        }
      }

    getUser() {
      if (this.isLoggedIn()) {
        return this.postoDetails; }
      }

    getUserEmail(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.afAuth.authState.subscribe(authState => {
                resolve(authState.email);
            });
        })
    }
}

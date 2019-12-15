import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseService } from './databaseService';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    paciente: Observable<firebase.User>;
    private pacienteDetails: firebase.User;

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.paciente = afAuth.authState;
        this.paciente.subscribe(
      (pac) => {
        if (pac) {
          this.pacienteDetails = pac;
        } else {
          this.pacienteDetails = null;
        }
      }
    );
    }

    public login(email: string, senha: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, senha);

    }

    public criarUser(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);

    }

    public logout() {
        return this.afAuth.auth.signOut();
    }
    isLoggedIn() {
        if (this.pacienteDetails === null) {
          return false;
        } else {
          return true;
        }
      }

    getUser() {
        if (this.isLoggedIn()) {
        return this.pacienteDetails; }
      }

  /*  getUser(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.afAuth.authState.subscribe(authState => {
                resolve(authState.email);
            });
        })
    }*/
}

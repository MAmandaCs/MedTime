import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseService } from './databaseService';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    paciente: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth, private router: Router){
        this.paciente = afAuth.authState;
        
    }

    public login(email: string, senha: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, senha)
        
    }

    public criarUser(email: string, password: string){
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);

    }

    public logout() {
        return this.afAuth.auth.signOut();
    } 

    getUser(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.afAuth.authState.subscribe(authState => {
                resolve(authState.email);
            });
        })
    }
}
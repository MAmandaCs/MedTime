import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicos/loginService';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {

  }


 ngOnInit() {
 }

 
 login(email, senha) {
   this.loginService.login(email, senha)
   .then(() => {
     this.router.navigate(['perfil']);
   });
 }

}

import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/servicos/pacienteService';
import { LoginService } from 'src/app/servicos/loginService';
import { Router } from '@angular/router';
import { PerfilUsuarioComponent } from 'src/app/perfil/perfil-usuario/perfil-usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }


  ngOnInit() {
  }
  
  login(email, senha){
    this.loginService.login(email, senha)
    .then(() => {
      this.router.navigate(['perfil'])
    });
    
  }

}




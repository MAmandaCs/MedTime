import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/servicos/pacienteService';
import { LoginService } from 'src/app/servicos/loginService';
import { Router } from '@angular/router';
import { PerfilUsuarioComponent } from 'src/app/perfil/perfil-usuario/perfil-usuario.component';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {

   }


  ngOnInit() {
  }

  login(email, senha) {
    console.log(this.loginService.login(email, senha)
    .then(() => {
      this.router.navigate(['perfil']);
    }));
  }

}




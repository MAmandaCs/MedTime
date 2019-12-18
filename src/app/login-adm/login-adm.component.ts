import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAdmService } from '../servicos/loginAdmService';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css']
})
export class LoginAdmComponent implements OnInit {

  constructor(private router: Router, private loginAdmService: LoginAdmService) { }

  ngOnInit() {
  }

  loginAdm({ email, senha }: { email; senha; }) {
    this.loginAdmService.login(email, senha)
    .then(() => {
      this.router.navigate(['posto']);
    });
  }

}

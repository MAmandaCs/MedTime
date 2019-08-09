import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MedTime';

  exibirMenu: boolean;
  exibirBotaoLogin: boolean;
  exibirBotaoSair: boolean;
  exibirBotaoDados: boolean;
  exibirBotaoHistorico: boolean;
  exibirBotaoPerfil: boolean;


  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (this.router.url.includes('login')) {
        this.exibirMenu = false;
      } else {
        this.exibirMenu = true;
      }
      if (this.router.url.includes('inicial')) {
        this.exibirBotaoLogin = true;
      } else {
        this.exibirBotaoLogin = false;
      }
      if (this.router.url.includes('perfil')) {
        this.exibirBotaoDados = true;
      } else {
        this.exibirBotaoDados = false;
      }
      if (this.router.url.includes('perfil')) {
        this.exibirBotaoHistorico = true;
      } else {
        this.exibirBotaoHistorico = false;
      }
      if (this.router.url.includes('meusDados')) {
        this.exibirBotaoPerfil = true;
      } else {
        this.exibirBotaoPerfil = false;
      }

    });

  }

  ngOnInit(): void {
    setTimeout(() => {
      $('.dropdown-trigger').dropdown();

    }, 100);
  }
}

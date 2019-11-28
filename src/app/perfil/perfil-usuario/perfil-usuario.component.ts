import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  horarios: any;
  exibiuAlerta: boolean;

  constructor() {
  this.horarios = [
      { profissional: 'Dentista', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00'},
      { profissional: 'Clinico', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00'},
      { profissional: 'Pediatria', segunda: '09:00-12:00', terca: '09:00-12:00', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00'},
      { profissional: 'Psicologo', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '09:00-12:00', sexta: '09:00-12:00'},
      { profissional: 'Fisoterapeuta', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00'},
      { profissional: ' ', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00'}
    ];
  }
  ngOnInit(): void {
    setTimeout(() => {
// tslint:disable-next-line: only-arrow-functions
      $(document).ready( function() {
        $('.collapsible').collapsible();
      });

// tslint:disable-next-line: only-arrow-functions
      $(document).ready( function() {
        $('select').formSelect();
      });
    }, 100);

  }

alerta() {
    if (!this.exibiuAlerta) {
      alert('Seja bem vindo a tela de perfil. Aqui você pode ver os horários de cada profissional, marcar consultas e baixar seus exames.');
      this.exibiuAlerta = true;
    }
}
}

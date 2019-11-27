import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-perfil-posto',
  templateUrl: './perfil-posto.component.html',
  styleUrls: ['./perfil-posto.component.css']
})
export class PerfilPostoComponent implements OnInit {

  agendamentosClinico: any[];
  agendamentosDentista: any[];
  agendamentosEnfermaria: any[];
  agendamentosFisio: any[];
  agendamentosPediatra: any[];
  agendamentosPiscologo: any[];
  agendamentosSelecionado: any[];

  constructor() {
    this.agendamentosClinico = [
      {  nome: 'Alvin', prontuario: '123456' },
      {  nome: 'Fulano', prontuario: '21837982' },
      {  nome: 'Beltrano', prontuario: '319782' },
      {  nome: 'Cascata', prontuario: '5165' },
      {  nome: 'Torrada', prontuario: '87987' }

    ];

    this.agendamentosDentista = [
      {  nome: 'Brigadeiro', prontuario: '23123' },
      {  nome: 'Empada', prontuario: '86848' },
      {  nome: 'Coxinha', prontuario: '54414' },
      {  nome: 'Espaguete', prontuario: '24946' },
      {  nome: 'Bolo', prontuario: '081488' }

    ];

    this.agendamentosEnfermaria = [
      {  nome: 'B', prontuario: '23123' },
      {  nome: 'E', prontuario: '86848' },
      {  nome: 'l', prontuario: '54414' },
      {  nome: 'i', prontuario: '24946' },
      {  nome: 'k', prontuario: '081488' }

    ];

    this.agendamentosFisio = [
      {  nome: 'Brigadeiro', prontuario: '23123' },
      {  nome: 'Empada', prontuario: '86848' },
      {  nome: 'Coxinha', prontuario: '54414' },
      {  nome: 'Espaguete', prontuario: '24946' },
      {  nome: 'Bolo', prontuario: '081488' }

    ];

    this.agendamentosPediatra = [
      {  nome: 'Brigadeiro', prontuario: '23123' },
      {  nome: 'Empada', prontuario: '86848' },
      {  nome: 'Coxinha', prontuario: '54414' },
      {  nome: 'Espaguete', prontuario: '24946' },
      {  nome: 'Bolo', prontuario: '081488' }

    ];

    this.agendamentosPiscologo = [
      {  nome: 'Brigadeiro', prontuario: '23123' },
      {  nome: 'Empada', prontuario: '86848' },
      {  nome: 'Coxinha', prontuario: '54414' },
      {  nome: 'Espaguete', prontuario: '24946' },
      {  nome: 'Bolo', prontuario: '081488' }

    ];

   }
   clinicoSelecionado() {
    this.agendamentosSelecionado = this.agendamentosClinico;
  }

  dentistaSelecionado() {
    this.agendamentosSelecionado = this.agendamentosDentista;
  }

  enfermariaSelecionado() {
    this.agendamentosSelecionado = this.agendamentosEnfermaria;
  }

  fisioSelecionado() {
     this.agendamentosSelecionado = this.agendamentosFisio;
  }

  pediatraSelecionado() {
    this.agendamentosSelecionado = this.agendamentosPediatra;
  }

  psicologoSelecionado() {
    this.agendamentosSelecionado = this.agendamentosPiscologo;
  }




   ngOnInit(): void {
  setTimeout(() => {
    // tslint:disable-next-line: only-arrow-functions
         $(document).ready( function() {
          $('.collapsible').collapsible();
        }),

  // tslint:disable-next-line: only-arrow-functions
          $(document).ready( function() {
           $('.tabs').tabs();
         });


       }, 100);

      }
   }




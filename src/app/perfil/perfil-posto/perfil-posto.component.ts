import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-perfil-posto',
  templateUrl: './perfil-posto.component.html',
  styleUrls: ['./perfil-posto.component.css']
})
export class PerfilPostoComponent implements OnInit {

  agendamentos: any[];


  constructor() {
    this.agendamentos = [
      {  nome: 'Alvin', prontuario: '123456' },
      {  nome: 'Fulano', prontuario: '21837982' },
      {  nome: 'Beltrano', prontuario: '319782' },
      {  nome: 'Cascata', prontuario: '5165' },
      {  nome: 'Torrada', prontuario: '87987' },
      {  nome: 'Brigadeiro', prontuario: '23123' },
      {  nome: 'Empada', prontuario: '86848' },
      {  nome: 'Coxinha', prontuario: '54414' },
      {  nome: 'Espaguete', prontuario: '24946' },
      {  nome: 'Bolo', prontuario: '081488' }

    ];
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


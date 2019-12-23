import { Psicologo } from './../../../entidades/psicologo';
import { Pediatria } from './../../../entidades/pediatria';
import { Fisioterapia } from './../../../entidades/fisioterapia';
import { Enfermaria } from './../../../entidades/enfermaria';
import { Dentista } from './../../../entidades/dentista';
import { Clinico } from './../../../entidades/clinico';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicos/databaseService';
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

  term: string;
  selected: any;
  selecionado: any;
  listaConsu: any[] = [];
  finalizar: any [];
  constructor(private dbService: DatabaseService) {   }

   filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);
    this.selected = selectedValue;
    }

    controle(event) {
      if (this.listaConsu.filter(el => el === event.target.value).length === 0) {
      if (event.target.checked === false) {
        this.listaConsu.push(event.target.value);
      }
    }
      if (this.listaConsu.filter(el => el === event.target.value).length === 0) {
        if (event.target.checked === true) {
          this.listaConsu.push(event.target.value);
        }
      }
      console.log(this.listaConsu);
    }

    funcEx(selectedValue: string) {
      console.log('value is ', selectedValue);
      this.selecionado = selectedValue;

    }

    limpar() {
     this.agendamentosSelecionado.forEach(el => {
      console.log(el.uid);
     });

    }

   clinicoSelecionado() {
    this.dbService.listar<Clinico>('clinico')
    .then(pacientessDB => {
      this.agendamentosClinico = pacientessDB;
      this.agendamentosSelecionado = this.agendamentosClinico.filter(p => p.dia === this.selected);
    });
    this.agendamentosClinico =  this.agendamentosSelecionado;
  }

  dentistaSelecionado() {
    this.dbService.listar<Dentista>('dentista')
    .then(pacientessDB => {
     this.agendamentosDentista = pacientessDB;
     this.agendamentosSelecionado = this.agendamentosDentista.filter(p => p.dia === this.selected);
    });
  }

  enfermariaSelecionado() {
    this.dbService.listar<Enfermaria>('enfermaria')
    .then(pacientessDB => {
     this.agendamentosEnfermaria = pacientessDB;
     this.agendamentosSelecionado = this.agendamentosEnfermaria.filter(p => p.dia === this.selected);
    });
  }

  fisioSelecionado() {

    this.dbService.listar<Fisioterapia>('fisioterapia')
    .then(pacientessDB => {
     this.agendamentosFisio = pacientessDB;
     this.agendamentosSelecionado = this.agendamentosFisio.filter(p => p.dia === this.selected);
    });
  }

  pediatraSelecionado() {

    this.dbService.listar<Pediatria>('pediatria')
    .then(pacientessDB => {
     this.agendamentosDentista = pacientessDB;
     this.agendamentosSelecionado = this.agendamentosDentista.filter(p => p.dia === this.selected);
    });
  }

  psicologoSelecionado() {
    this.dbService.listar<Psicologo>('psicologo')
    .then(pacientessDB => {
     this.agendamentosPiscologo = pacientessDB;
     this.agendamentosSelecionado = this.agendamentosPiscologo.filter(p => p.dia === this.selected);
    });

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

  // tslint:disable-next-line: only-arrow-functions
  $(document).ready( function() {
        $('select').formSelect();
      });
      }
   }




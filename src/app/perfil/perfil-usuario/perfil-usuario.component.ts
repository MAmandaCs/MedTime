
import { Psicologo } from 'src/entidades/psicologo';
import { Enfermaria } from './../../../entidades/enfermaria';
import { Horario } from 'src/entidades/horario';
import { CadastroPaciente } from './../../../entidades/cadastroPaciente';
import { PacienteService } from './../../servicos/pacienteService';
import { Dentista } from './../../../entidades/dentista';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicos/loginService';
import { DatabaseService } from 'src/app/servicos/databaseService';
import { Clinico } from 'src/entidades/clinico';
import { Fisioterapia } from 'src/entidades/fisioterapia';
import { Pediatria } from 'src/entidades/pediatria';
import { EspecialidadeService } from 'src/app/servicos/especialidadeService';

declare var $: any;

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  pacLogado: CadastroPaciente;
  nomeUsuario: string;
  horarios: any;
  exibiuAlerta: boolean;
  private uidPac: string;
  paciente: CadastroPaciente;
  emailUsuario: string;


  clinico: Clinico;
  dentista: Dentista;
  enfermaria: Enfermaria;
  fisioterapia: Fisioterapia;
  pediatria: Pediatria;
  psicologo: Psicologo;



  selected: any;
  pacienteM: CadastroPaciente;
  controle: any;
  controleC: any [];

  horariosC: Horario [];
  horarioCli: Horario[] = [];

  h: any [] = [];
  paC: Clinico [];
  paCli: Clinico [];

  paD: Dentista [];
  paDen: Dentista[];

  paE: Enfermaria [];
  paEn: Enfermaria [];


paF: Fisioterapia [];

paFi: Fisioterapia [];


paP: Pediatria [];

paPe: Pediatria [];


paPS: Psicologo [];

paPs: Psicologo [];


  horariosD: Horario [];
  horarioDen: Horario[] = [];

  horariosE: Horario [];
  horarioEn: Horario[] = [];

  horariosF: Horario [];
  horarioFis:  Horario[] = [];

  horariosP: Horario [];
  horarioPed:  Horario[] = [];

  horariosPs: Horario [];
  horarioPsi: Horario[] = [];


  constructor(private loginService: LoginService, private dbService: DatabaseService, private espService: EspecialidadeService) {
    this.horarios = [
      { profissional: 'Dentista', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00' },
      { profissional: 'Clinico', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00' },
      { profissional: 'Pediatria', segunda: '09:00-12:00', terca: '09:00-12:00', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00' },
      { profissional: 'Psicologo', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '09:00-12:00', sexta: '09:00-12:00' },
      { profissional: 'Fisoterapeuta', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00' },
      { profissional: 'Enfermaria ', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00' }
    ];

  }
  async ngOnInit() {

    this.emailUsuario = await this.loginService.getUser().email;
    this.pacienteM = (await this.dbService.buscar<CadastroPaciente>('/pacientes', 'email', this.emailUsuario))[0];
    console.log(this.pacienteM.email);






    // this.pacienteLogado();

    // this.uidPac = await this.loginService.getUser().uid;
    // console.log(this.uidPac);
    setTimeout(() => {
      // tslint:disable-next-line: only-arrow-functions
      $(document).ready(function() {
        $('.collapsible').collapsible();
      });

      // tslint:disable-next-line: only-arrow-functions
      $(document).ready(function() {
        $('select').formSelect();
      });
    }, 100);

  }

async listarC() {
    await this.dbService.listar<Horario>('horarios')
    .then(hoariosDB => {
      this.horariosC = hoariosDB;
      let bbb = this.horariosC.filter(horario => horario.especialidade === 'Clínico Geral');
      bbb.forEach(e =>{
        if(e.possuiAtendimento){
          this.horarioCli.push(e); 
         console.log(this.horarioCli);
        }
         
      
         
      });

     // let aaa = bbb.map(el => {
      //  return el.dia
     // });
     

    });
     
   // console.log( this.horarioCli);
  }

  alerta() {
    if (!this.exibiuAlerta) {
      alert('Seja bem vindo a tela de perfil. Aqui você pode ver os horários de cada profissional, marcar consultas e baixar seus exames.');
      this.exibiuAlerta = true;
    }
  }

  async pacienteLogado() {

    this.emailUsuario = await this.loginService.getUser().email;
    this.pacLogado = (await this.dbService.buscar<CadastroPaciente>('/pacientes', 'email', this.nomeUsuario))[0];

   }

   filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);
    this.selected = selectedValue;

    }


   async marcarClin() {

  /* await this.dbService.listar<Clinico>('clinico').then(pacDB =>{
    this.paC = pacDB;
    let a = this.

   })*/
   await this.dbService.listar<Clinico>('clinico')
    .then(pacCliDB => {
      this.paC = pacCliDB;
      let bbb = this.paC.filter(pacient => pacient.nProntuario === this.pacienteM.nProntuario);
      this.paCli = bbb;
    });

   console.log(this.paCli);

   if (this.paCli.length === 0 ) {
 this.clinico = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
 this.espService.inserirClinico(this.clinico);
 alert('Consulta marcada.');

 } else {
  this.paCli.forEach(el => {
  if (el.nome !== this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected ) {
    alert('Marcação não efetuada, pois já tem um membro da família agendado para esse médico');

   } else if (el.nome === this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected) {
     alert('Marcação não efetuada, pois você tem uma consulta agendada para esse dia.');

   } else {

  this.clinico = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
  this.espService.inserirClinico(this.clinico);
  alert('Consulta marcada.');
   }

  }
  );
}


   }


async listarD() {
    await this.dbService.listar<Horario>('horarios')
    .then(hoariosDB => {
      this.horariosD = hoariosDB;
      let bbb = this.horariosD.filter(horario => horario.especialidade === 'Dentista' );
        bbb.forEach(e =>{
        if(e.possuiAtendimento){
          this.horarioDen.push(e); 
         console.log(this.horarioDen);
        }
         
      
         
      });
      
    });
   
  }

async listarE() {
    await this.dbService.listar<Horario>('horarios')
    .then(hoariosDB => {
      this.horariosE = hoariosDB;
      let bbb = this.horariosE.filter(horario => horario.especialidade === 'Enfermaria' );
      bbb.forEach(e =>{
        if(e.possuiAtendimento){
          this.horarioEn.push(e); 
         console.log(this.horarioEn );
        }
         
      
         
      });
      
    });
  }

async listarF() {
    await this.dbService.listar<Horario>('horarios')
    .then(hoariosDB => {
      this.horariosF = hoariosDB;
      let bbb = this.horariosF.filter(horario => horario.especialidade === 'Fisioterapeuta' );
     bbb.forEach(e =>{
        if(e.possuiAtendimento){
         this.horarioFis.push(e); 
         console.log(this.horarioFis);
        }
         
      
         
      });
      
    });
  }

async listarP() {
    await this.dbService.listar<Horario>('horarios')
    .then(hoariosDB => {
      this.horariosP = hoariosDB;
      let bbb = this.horariosP.filter(horario => horario.especialidade === 'Pediatra' );
  bbb.forEach(e =>{
        if(e.possuiAtendimento){
         this.horarioPed.push(e); 
         console.log(this.horarioPed);
        }
         
      
         
      });
      
    });
  }
async listarPs() {
    await this.dbService.listar<Horario>('horarios')
    .then(hoariosDB => {
      this.horariosPs = hoariosDB;
      let bbb = this.horariosPs.filter(horario => horario.especialidade === 'Psicólogo' );
  bbb.forEach(e =>{
        if(e.possuiAtendimento){
         this.horarioPsi.push(e); 
         console.log(this.horarioPsi);
        }
         
      
         
      });
      
    });
  }



async marcarDen() {

 /*this.controle = (await this.dbService.buscar<Dentista>('/dentista', 'nProntuario', this.pacienteM.nProntuario ))[0];
 console.log(this.controle.nProntuario);*/

 await this.dbService.listar<Dentista>('dentista')
    .then(pacCliDB => {
      this.paD = pacCliDB;
      let bbb = this.paD.filter(pacient => pacient.nProntuario === this.pacienteM.nProntuario);
      this.paDen = bbb;
    });

 console.log(this.paDen);

 if (this.paDen.length === 0 ) {
 this.dentista = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
 this.espService.inserirDentista(this.dentista);
 alert('Consulta marcada.');

 } else {
  this.paDen.forEach(el => {
  if (el.nome !== this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected ) {
    alert('Marcação não efetuada, pois já tem um membro da família agendado para esse médico');

   } else if (el.nome === this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected) {
     alert('Marcação não efetuada, pois você tem uma consulta agendada para esse dia.');

   } else {

    this.dentista = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
    this.espService.inserirDentista(this.dentista);
  alert('Consulta marcada.');
   }

  }
  );


 }



 }


async marcarEnf() {

  await this.dbService.listar<Enfermaria>('enfermaria')
  .then(pacCliDB => {
    this.paE = pacCliDB;
    let bbb = this.paE.filter(pacient => pacient.nProntuario === this.pacienteM.nProntuario);
    this.paEn = bbb;
  });

console.log(this.paEn);

if (this.paEn.length === 0 ) {
this.enfermaria = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
this.espService.inserirEnfermaria(this.enfermaria);
alert('Consulta marcada.');

} else {
this.paEn.forEach(el => {
if (el.nome !== this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected ) {
  alert('Marcação não efetuada, pois já tem um membro da família agendado para esse médico');

 } else if (el.nome === this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected) {
   alert('Marcação não efetuada, pois você tem uma consulta agendada para esse dia.');

 } else {

  this.dentista = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
  this.espService.inserirDentista(this.dentista);
alert('Consulta marcada.');
 }

}
);

}
 }
async marcarFis() {

 /*this.controle = (await this.dbService.buscar<Fisioterapia>('/fisioterapia', 'nProntuario', this.pacienteM.nProntuario ))[0];
 console.log(this.controle.nProntuario);*/
 await this.dbService.listar<Fisioterapia>('fisioterapia')
    .then(pacCliDB => {
      this.paF = pacCliDB;
      let bbb = this.paF.filter(pacient => pacient.nProntuario === this.pacienteM.nProntuario);
      this.paFi = bbb;
    });

   console.log(this.paFi);

   if (this.paFi.length === 0 ) {
 this.fisioterapia = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
 this.espService.inserirFisioterapia(this.fisioterapia);
 alert('Consulta marcada.');

 } else {
  this.paFi.forEach(el => {
  if (el.nome !== this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected ) {
    alert('Marcação não efetuada, pois já tem um membro da família agendado para esse médico');

   } else if (el.nome === this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected) {
     alert('Marcação não efetuada, pois você tem uma consulta agendada para esse dia.');

   } else {

  this.fisioterapia = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
  this.espService.inserirFisioterapia(this.fisioterapia);
  alert('Consulta marcada.');
   }

  }
  );
}



 }

async marcarPed() {

/* this.controle = (await this.dbService.buscar<Pediatria>('/pediatria', 'nProntuario', this.pacienteM.nProntuario ))[0];
 console.log(this.controle.nProntuario);*/
 await this.dbService.listar<Pediatria>('pediatria')
    .then(pacCliDB => {
      this.paP = pacCliDB;
      let bbb = this.paP.filter(pacient => pacient.nProntuario === this.pacienteM.nProntuario);
      this.paPe = bbb;
    });

   console.log(this.paPe);

   if (this.paPe.length === 0 ) {
 this.pediatria = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
 this.espService.inserirPediatria(this.pediatria);
 alert('Consulta marcada.');

 } else {
  this.paPe.forEach(el => {
  if (el.nome !== this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected ) {
    alert('Marcação não efetuada, pois já tem um membro da família agendado para esse médico');

   } else if (el.nome === this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected) {
     alert('Marcação não efetuada, pois você tem uma consulta agendada para esse dia.');

   } else {

  this.pediatria = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
  this.espService.inserirPediatria(this.pediatria);
  alert('Consulta marcada.');
   }

  }
  );
}

 }



 async marcarPsi() {

  await this.dbService.listar<Psicologo>('psicologo')
  .then(pacCliDB => {
    this.paPS = pacCliDB;
    let bbb = this.paPS.filter(pacient => pacient.nProntuario === this.pacienteM.nProntuario);
    this.paPs = bbb;
  });

 console.log(this.paPs);

 if (this.paPs.length === 0 ) {
this.psicologo = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
this.espService.inserirPsicologo(this.psicologo);
alert('Consulta marcada.');

} else {
this.paPs.forEach(el => {
if (el.nome !== this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected ) {
  alert('Marcação não efetuada, pois já tem um membro da família agendado para esse médico');

 } else if (el.nome === this.pacienteM.nome && el.nProntuario === this.pacienteM.nProntuario && el.dia === this.selected) {
   alert('Marcação não efetuada, pois você tem uma consulta agendada para esse dia.');

 } else {

  this.psicologo = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
  this.espService.inserirPsicologo(this.psicologo);
alert('Consulta marcada.');
 }

}
);
}


 }





}

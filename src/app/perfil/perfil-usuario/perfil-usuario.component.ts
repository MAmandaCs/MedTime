import { Horario } from 'src/entidades/horario';
import { CadastroPaciente } from './../../../entidades/cadastroPaciente';
import { PacienteService } from './../../servicos/pacienteService';
import { Dentista } from './../../../entidades/dentista';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicos/loginService';
import { DatabaseService } from 'src/app/servicos/databaseService';
import { Clinico } from 'src/entidades/clinico';
import { Enfermaria } from 'src/entidades/enfermaria';
import { Fisioterapia } from 'src/entidades/fisioterapia';
import { Pediatria } from 'src/entidades/pediatria';
import { Psicologo } from 'src/entidades/psicologo';
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



  selected:any;
  pacienteM : CadastroPaciente;
controle:any;

  horariosC: Horario [];
  horarioCli: Horario[];

  horariosD: Horario [];
  horarioDen: Horario[];

  horariosE: Horario [];
  horarioEn: Horario[];

  horariosF: Horario [];
  horarioFis: Horario[];

  horariosP: Horario [];
  horarioPed: Horario[];

  horariosPs: Horario [];
  horarioPsi: Horario[];


  constructor(private loginService: LoginService, private dbService: DatabaseService, private espService: EspecialidadeService) {
    this.horarios = [
      { profissional: 'Dentista', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00' },
      { profissional: 'Clinico', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00' },
      { profissional: 'Pediatria', segunda: '09:00-12:00', terca: '09:00-12:00', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00' },
      { profissional: 'Psicologo', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '09:00-12:00', sexta: '09:00-12:00' },
      { profissional: 'Fisoterapeuta', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00' },
      { profissional: ' ', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00' }
    ];

  }
  async ngOnInit() {

    this.emailUsuario = await this.loginService.getUser().email;
    this.pacienteM = (await this.dbService.buscar<CadastroPaciente>('/pacientes', 'email', this.emailUsuario))[0];
    console.log(this.pacienteM.email);






    //this.pacienteLogado();

    //this.uidPac = await this.loginService.getUser().uid;
    //console.log(this.uidPac);
    setTimeout(() => {
      // tslint:disable-next-line: only-arrow-functions
      $(document).ready(function () {
        $('.collapsible').collapsible();
      });

      // tslint:disable-next-line: only-arrow-functions
      $(document).ready(function () {
        $('select').formSelect();
      });
    }, 100);

  }

async listarC() {
    await this.dbService.listar<Horario>('horarios')
    .then(hoariosDB => {
      this.horariosC = hoariosDB;
      let bbb = this.horariosC.filter(horario => horario.especialidade === 'Clínico Geral' );



     // let aaa = bbb.map(el => {
      //  return el.dia
     // });
      this.horarioCli = bbb;
    });
    console.log( this.horarioCli);
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

   filterChanged(selectedValue:string){
    console.log('value is ',selectedValue);
    this.selected = selectedValue;

    }


   async marcarClin() {

 this.controle = (await this.dbService.buscar<Clinico>('/clinico', 'nProntuario',this.pacienteM.nProntuario ))[0];
 console.log(this.controle.nProntuario);

 if(this.controle === null){
 this.clinico = {dia: this.selected, nome: this.pacienteM.nome, nProntuario: this.pacienteM.nProntuario};
 this.espService.inserirClinico(this.clinico);
 alert('Consulta marcada.');
 console.log(' Consulta marcada');

}else{
  if(this.controle.nome === this.pacientM.nome && this.){
    alert('')
  }
 alert('Marcação não efetuada, pois já tem um membro da familia agendado para esse médico');
 }
 }

}

import { Horario } from './../../../entidades/horario';
import { Component, OnInit } from '@angular/core';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';
import { LoginService } from 'src/app/servicos/loginService';
import { DatabaseService } from 'src/app/servicos/databaseService';

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

  teste: any[];

  horariosC: Horario [];

  horarioCli: Horario;
  constructor(private loginService: LoginService, private dbService: DatabaseService) {
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

    //this.pacienteLogado();

    //this.uidPac = await this.loginService.getUser().uid;
    console.log(this.uidPac);
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
      let bbb = this.horariosC.filter(horario => horario.especialidade === 'Dentista' );
      this.horariosC = bbb;
    });
    console.log( this.horariosC);
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

}

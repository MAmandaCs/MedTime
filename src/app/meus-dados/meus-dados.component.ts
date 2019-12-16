import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../servicos/loginService';
import { PacienteService } from '../servicos/pacienteService';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';
import { DatabaseService } from '../servicos/databaseService';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css'],
  providers: [LoginService, DatabaseService, PacienteService ]
})
export class MeusDadosComponent implements OnInit {

  private emailUsuario: string;
  cadastroPaciente: CadastroPaciente;
  carregando: boolean;



  constructor(private loginService: LoginService, private dbService: DatabaseService, private pacienteService: PacienteService ) {

  }

  async ngOnInit() {
    this.emailUsuario = await this.loginService.getUser().email;
    this.cadastroPaciente = (await this.dbService.buscar<CadastroPaciente>('/pacientes', 'email', this.emailUsuario))[0];

  }

@ViewChild('atualizar') form: NgForm;

async update(atualizar) {
    const dadpsAtualizados = {
      nome: atualizar.inputNome,
      rg: atualizar.inputRg,
      cpf: atualizar.inputCPF,
      email: atualizar.inputEmail,
      cidade: atualizar.inputCidade,
      bairro: atualizar.inputBairro,
      rua: atualizar.inputRua,
      senha: atualizar.inputSenha,
      confSenha: atualizar.inputConfSenha,
      nSUS: atualizar.inputSUS,
      nProntuario: atualizar.inputProntuario,
      telefone: atualizar.telefone
    };
    await this.dbService.update('/pacientes', this.cadastroPaciente.uid, this.cadastroPaciente);
    console.log(this.cadastroPaciente.email);
  }

remover() {
  this.cadastroPaciente.uid = this.loginService.getUser().uid;
  this.dbService.remove('/pacientes', this.cadastroPaciente.uid);
  console.log('Excluiu ');

}



  onSubmit() {

  }
}

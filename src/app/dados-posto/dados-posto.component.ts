import { CadastroPosto } from 'src/entidades/cadastroPosto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../servicos/databaseService';
import { NgForm } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-dados-posto',
  templateUrl: './dados-posto.component.html',
  styleUrls: ['./dados-posto.component.css']
})
export class DadosPostoComponent implements OnInit {

  private emailUsuario: string;
  cadastroPosto: CadastroPosto;
  funcionarios: CadastroPosto[];
  carregando: boolean;
  removeList: any[] = [];
  term: string;

  //private loginService: LoginService
  constructor( private dbService: DatabaseService) {
    this.carregarFuncionarios();
  }

  async ngOnInit() {
   // this.emailUsuario = await this.loginService.getUser().email;
    //this.cadastroPosto = (await this.dbService.buscar<CadastroPosto>('/funcionarios', 'email', this.emailUsuario))[0];

    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

  @ViewChild('atualizar') form: NgForm;

  async update(atualizar) {
      const dadpsAtualizados = {
        nome: atualizar.inputNome,
        rg: atualizar.inputRg,
        cpf: atualizar.inputCPF,
        email: atualizar.inputEmail,
        senha: atualizar.inputSenha,
        confSenha: atualizar.inputConfSenha,
        funcao: atualizar.inputFuncao,
        dtNasc: atualizar.dtNasc
      };
      await this.dbService.update('/funcionarios', this.cadastroPosto.uid, this.cadastroPosto);
      console.log(this.cadastroPosto.email);
    }

  remover() {
    ///this.cadastroPosto.uid = this.loginService.getUser().uid;
    this.dbService.remove('/funcionarios', this.cadastroPosto.uid);
    alert('Perfil excluido');
    console.log('Excluiu ');

  }


  private carregarFuncionarios() {
    this.carregando = true;

    this.dbService.listar<CadastroPosto>('funcionarios')
      .then(funcionariosDB => {
        this.funcionarios = funcionariosDB;
        this.funcionarios.forEach(funcionario => funcionario.nome = this.funcionarios.filter(u => u.uid === funcionario.uid)[0].nome);

        this.carregando = false;
    });
  }

  removerF() {
    this.removeList.forEach(el => {
      console.log(el);
      this.dbService.remove('/funcionarios', el);
      console.log('Excluiu ');
      alert('Funcionário(s) excluido(s)');
      this.carregarFuncionarios();

    });
  }
  funcDumb(event) {
    if (event.target.checked === false) {
      const filter = this.removeList.filter(el => el !== event.target.value);
      this.removeList = [];
      this.removeList = filter;
    }

    if (this.removeList.filter(el => el === event.target.value).length === 0) {
      if (event.target.checked === true) {
        this.removeList.push(event.target.value);
      }
    }

  }


}

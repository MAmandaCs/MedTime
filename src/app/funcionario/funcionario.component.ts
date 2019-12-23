import { Component, OnInit, ViewChild } from '@angular/core';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';
import { PacienteService } from '../servicos/pacienteService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { reject } from 'q';
import { DatabaseService } from '../servicos/databaseService';
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  novoPaciente: CadastroPaciente;
  pacientes: CadastroPaciente[];
  carregando: boolean;
  removeList: any[] = [];
  alteraList: any [] = [];
  term: string;
  cadastroPaciente: CadastroPaciente;
  pac: CadastroPaciente [];

  constructor(private dbService: DatabaseService, private pacienteService: PacienteService) {
    this.novoPaciente = new CadastroPaciente();
    this.carregarPacientes();
  }


   ngOnInit(): void {
           setTimeout(() => {
             // tslint:disable-next-line: only-arrow-functions
                   $(document).ready( function() {
                     $('.collapsible').collapsible();
                   });
      }, 100);
  }

  private carregarPacientes() {
    this.carregando = true;

    this.dbService.listar<CadastroPaciente>('pacientes')
      .then(pacientessDB => {
        this.pacientes = pacientessDB;
        this.pacientes.forEach(paciente => paciente.nome = this.pacientes.filter(u => u.uid === paciente.uid)[0].nome);

        this.carregando = false;
    });
  }

  remover() {
    this.removeList.forEach(el => {
      console.log(el);
      this.dbService.remove('/pacientes', el);
      console.log('Excluiu ');
      alert('Paciente(s) excluido(s)');
      this.carregarPacientes();

    });
  }
  funcEx(event) {
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

  funcAl(event) {
    if (event.target.checked === false) {
      const filter = this.alteraList.filter(el => el !== event.target.value);
      this.alteraList = [];
      this.alteraList = filter;
    }

    if (this.alteraList.filter(el => el === event.target.value).length === 0) {
      if (event.target.checked === true) {
        this.alteraList.push(event.target.value);
      }
    }

  }
 async mostraPaciente() {

      if (this.alteraList.length > 1){
        alert('Você só pode selecionar um');
      } else {
      await this.dbService.listar<CadastroPaciente>('pacientes')
      .then(pacientessDB => {
        this.pacientes = pacientessDB;
        let bbb = this.pacientes.filter(paciente => paciente.uid === this.alteraList[0]);
        this.cadastroPaciente = bbb[0];
      console.log( 'buscou');
      });

    }
     // this.carregarPacientes();
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
    alert('Paciente Atualizado');
    this.carregarPacientes();
  }

  //  buscarPaciente(){
  //    return new Promise<void>((resolve, reject) => {
  //      this.pacienteService.buscar<CadastroPaciente>('pacientes', 'cpf', cpf)
  //          .then(pacientes => {
  //              if (pacientes.length > 0) {
  //                  reject('Paciente não encontrado no nosso banco de dados');
  //              } else {
  //                  this.database.remover(PATH, cpf)
  //                      .then(() => resolve());
  //              }
  //          });
  //  });
  //  }

  // buscarPaciente(value: any, arg: any){
  //   this.http.get('https://medtime-9ea7b.firebaseio.com/pacientes.json')
  //   return new Promise<void>((resolve, reject) => {
  //     this.pacienteService.buscar<CadastroPaciente>('paciente', )
  //   });


//   pacientes: any;
//   pacienteSelecionado: any;
//   Vipacientes: any;
//   constructor() {
//   this.pacientes = [{nome: 'Álvaro Kayc da Silva Santos', cpf: '122365474-09' }];
//   this.pacienteSelecionado = {};
//   // tslint:disable-next-line: max-line-length
//   this.Vipacientes = [{prontuario: '11122251', nome: 'Estephany Beatriz da Silva Santos', cpf: '11111111111-11',
//   nascimento: '12/12/19', email: 'estephany@gmail.com', endereco: 'Rua Epitacio Coimbra, nº 1042. Heliópolis'}];
//   }  ngOnInit(): void {
//     setTimeout(() => {
//       // tslint:disable-next-line: only-arrow-functions
//             $(document).ready( function() {
//               $('.collapsible').collapsible();
//             });
// }, 100);
// }
// selecionarPaciente(paciente) {
//   this.pacienteSelecionado = paciente;
//  }


}


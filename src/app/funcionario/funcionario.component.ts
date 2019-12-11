import { Component, OnInit } from '@angular/core';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';
import { PacienteService } from '../servicos/pacienteService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { reject } from 'q';
import { DatabaseService } from '../servicos/databaseService';
declare var $: any;

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  novoPaciente: CadastroPaciente;
  pacientes: CadastroPaciente[];
  carregando = true;
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

    this.pacienteService.lista()
      .then(pacientessDB => {
        this.pacientes = pacientessDB;
       this.pacientes.forEach(paciente => paciente['nome'] = this.pacientes.filter(u => u.uid === paciente.uid)[0].nome);
      this.carregando = false;
    });
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


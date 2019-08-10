import { Component, OnInit } from '@angular/core';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';
import { PacienteService } from '../servicos/pacienteService';
declare var $: any;
@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  paciente: CadastroPaciente;
  pacientes: CadastroPaciente[];
  carregando = true;

  
  constructor(private pacienteService: PacienteService){
    this.paciente = new CadastroPaciente();

    this.listarPacientes();
    
  } 
  ngOnInit(){
  
  }

  editar(paciente) {
    paciente.editando = true;
  }

  private listarPacientes() {
    this.carregando = true;

    this.pacienteService.listar()
      .then(pacienteDB => {
        this.pacientes = pacienteDB;

        this.carregando = false;
    });
  }

  remover(uid: string) {
    this.pacienteService.remover(uid)
      .then(() => {
        alert('Paciente foi excluído');
        this.listarPacientes();
      }).catch(error => alert(error));
  }


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


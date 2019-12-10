import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicos/loginService';
import { PacienteService } from '../servicos/pacienteService';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';
import { DatabaseService } from '../servicos/databaseService';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css'],
  providers: [LoginService, DatabaseService]
})
export class MeusDadosComponent implements OnInit {

  private emailUsuario: string;
  cadastroPaciente: CadastroPaciente;



  constructor(private loginService: LoginService, private dbService: DatabaseService, private pacienteService: PacienteService ) { }

  async ngOnInit() {
    this.emailUsuario = await this.loginService.getUser();
    this.cadastroPaciente = (await this.dbService.buscar<CadastroPaciente>('pacientes', 'email', this.emailUsuario))[0];

  }
 atualizar(cadastroPaciente) {
  this.pacienteService.atualizar(cadastroPaciente)
    .then(() => {
      alert('usuário atualizado com sucesso');
    });
  }

  remover(uid: string) {
    this.pacienteService.remover(uid)
      .then(() => {
        alert('Paceinte removido com sucesso');
      }).catch(error => alert(error));
  }



  onSubmit(){

  }
}

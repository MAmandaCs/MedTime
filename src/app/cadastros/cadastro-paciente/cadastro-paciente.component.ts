import { Component, OnInit } from '@angular/core';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';
import { DatabaseService } from 'src/app/servicos/databaseService';
import { PacienteService } from 'src/app/servicos/pacienteService';
import { LoginService } from 'src/app/servicos/loginService';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  paciente: CadastroPaciente;
  pacientes: CadastroPaciente[];
  carregando = true;
  dataNascimento: any;

  constructor(private pacienteService: PacienteService, private loginService: LoginService){
    this.paciente = new CadastroPaciente();

    this.listarPacientes();
  }

  ngOnInit() {

  }

  cadastrar() {
    this.paciente.dtNasc = new Date(this.dataNascimento).getTime();
    this.pacienteService.inserir(this.paciente)
      .then(() => {
        this.loginService.criarUser(this.paciente.email, this.paciente.senha);
        this.paciente = new CadastroPaciente();
        this.dataNascimento = new Date();
        alert('Paciente inserido no posto');

    });
  }

  verificarSenha(senha: string, confSenha: string){
    if(senha === confSenha){
      return true;
    }
    return false;
  }

  addPaciente(){
    this.verificarSenha(this.paciente.senha, this.paciente.confSenha);
    if(this.verificarSenha(this.paciente.senha, this.paciente.confSenha) == true){
      this.cadastrar()
    }else{
      alert('Digite a mesma senha nos campos "Senha" e "Confirmar Senha"');
      this.paciente.senha = '';
      this.paciente.confSenha = '';
  }
}

  editar(paciente) {
    paciente.editando = true;
  }

  private listarPacientes() {
    this.carregando = true;

    this.pacienteService.lista()
      .then(pacienteDB => {
        this.pacientes = pacienteDB;

        this.carregando = false;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';
import { DatabaseService } from 'src/app/servicos/databaseService';
import { PacienteService } from 'src/app/servicos/pacienteService';

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

  constructor(private pacienteService: PacienteService){
    this.paciente = new CadastroPaciente();

    this.listarPacientes();
    
  }
  
  ngOnInit() {
  }

  cadastrar() {
    this.paciente.dtNasc = new Date(this.dataNascimento).getTime();
    this.pacienteService.inserir(this.paciente)
      .then(() => {
        alert('Paciente inserido no posto');
        this.paciente = new CadastroPaciente();
      
    });
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
  
}

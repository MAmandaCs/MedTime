import { Component, OnInit } from '@angular/core';
import { EspecialidadeService } from '../servicos/especialidadeService';
import { CadastroPaciente } from 'src/entidades/cadastroPaciente';
import { DatabaseService } from '../servicos/databaseService';
import { Clinico } from 'src/entidades/clinico';
import { Psicologo } from 'src/entidades/psicologo';
import { Fisioterapia } from 'src/entidades/fisioterapia';
import { Pediatria } from 'src/entidades/pediatria';
import { Enfermaria } from 'src/entidades/enfermaria';
import { Dentista } from 'src/entidades/dentista';

const PATH = 'pacientes';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})

export class TesteComponent implements OnInit {

  dia: string;
  nome: string;
  paciente: CadastroPaciente;
  clinico: Clinico;
  dentista: Dentista;
  enfermaria: Enfermaria;
  pediatria: Pediatria;
  fisioterapia: Fisioterapia;
  psicologo: Psicologo;

  constructor(private especialidadeService: EspecialidadeService, private database: DatabaseService) {}
  

  ngOnInit() {
    
  }

  //  cadastrar() {
  //    //this.funcPosto.dtNasc = new Date(this.dataNascimento).getTime();
  //    this.especialidadeService.inserirE(dia, this.paciente);
  //    this.funcPosto = new CadastroPosto();
  //    alert('Funcionário inserido no posto');

  // }

  teste1(dia: string, nome: string){

    this.clinico = {dia, nome};

    this.especialidadeService.inserirClinico(this.clinico);
  }

  teste2(dia: string, nome: string){

    this.dentista = {dia, nome};

    this.especialidadeService.inserirDentista(this.dentista);
  }

  teste3(dia: string, nome: string){

    this.enfermaria = {dia, nome};

    this.especialidadeService.inserirEnfermaria(this.enfermaria);
  }

  teste4(dia: string, nome: string){

    this.fisioterapia = {dia, nome};

    this.especialidadeService.inserirFisioterapia(this.fisioterapia);
  }

  teste5(dia: string, nome: string){

    this.pediatria = {dia, nome};

    this.especialidadeService.inserirPediatria(this.pediatria);
  }

  teste6(dia: string, nome: string){

    this.psicologo = {dia, nome};

    this.especialidadeService.inserirPsicologo(this.psicologo);
  }

}

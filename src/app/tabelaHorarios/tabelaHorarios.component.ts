import { OnInit, Component } from '@angular/core';
import { HorarioService } from 'src/app/servicos/horarioService';
import { Horario } from 'src/entidades/horario';
import { DatabaseService } from '../servicos/databaseService';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tabelaHorarios',
    templateUrl: './tabelaHorarios.component.html',
    styleUrls: ['./tabelaHorarios.component.css']
  })

  export class TabelaHorariosComponent implements OnInit {

    horarios: Horario[];
    carregando = true;
    vaga: number;
    vagas: number[];
    dias: string[];

    constructor(private horarioService: HorarioService, private dbService: DatabaseService, private router: Router){
      this.dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
    }


    ngOnInit(){

      this.carregarHorarios();
      this.dias;

    }

    tabelaDeHorarios(){
      return this.horarioService.listarHorarios();
    }

    private carregarHorarios() {
      this.dbService.listarHorariosDB<Horario>('horarios')
      .then(horariosDB => {
        this.horarios = horariosDB;

      });
    }

    
  


    // private carregarHorarios() {
    //   this.carregando = true;
  
    //   this.dbService.listarHorariosDB<Horario>('horarios')
    //   .then(horarioDB => {
    //     this.horarios = horarioDB;
  
    //     this.horarios.forEach(contato => contato['nomeUsuario'] = this.usuarios.filter(u => u.uid === contato.uiHorario)[0].nome);
  
    //     this.carregando = false;
    //   });
    // }

  
}
  
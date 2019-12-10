import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/entidades/horario';
import { HorarioService } from '../servicos/horarioService';

@Component({
  selector: 'app-horario-clinico',
  templateUrl: './horario-clinico.component.html',
  styleUrls: ['./horario-clinico.component.css']
})
export class HorarioClinicoComponent implements OnInit {

  horarios: Horario[];

  constructor(private horarioService: HorarioService){
    this.horarios = [
      { indice: 1, dia: 'Segunda-feira', possuiAtendimento: false, inicio: null, termino: null },
      { indice: 2, dia: 'Terça-feira', possuiAtendimento: false, inicio: null, termino: null },
      { indice: 3, dia: 'Quarta-feira', possuiAtendimento: false, inicio: null, termino: null},
      { indice: 4, dia: 'Quinta-feira', possuiAtendimento: false, inicio: null, termino: null },
      { indice: 5, dia: 'Sexta-feira', possuiAtendimento: false, inicio: null, termino: null },
      { indice: 6, dia: 'Sábado', possuiAtendimento: false, inicio: null, termino: null },
    
    ]}

  ngOnInit() {
  }

  addHorario(){
    for(let horario of this.horarios){ 
    this.horarioService.inserirHorario(horario);
    console.log("eee");}
  
   }

}

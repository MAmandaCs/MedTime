import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HorarioService } from 'src/app/servicos/horarioService';
import { Horario } from 'src/entidades/horario';
import { format } from 'url';
import { Horarios } from 'src/entidades/horarios';
import { HorariosService } from '../servicos/horariosService';


declare var $: any;
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  horarios: Horarios[];

  constructor(private horarioService: HorariosService){
    this.horarios = [
      { dia: 'Segunda-feira', inicio: null, termino: null },
      { dia: 'Terça-feira', inicio: null, termino: null },
      { dia: 'Quarta-feira', inicio: null, termino: null},
      { dia: 'Quinta-feira', inicio: null, termino: null },
      { dia: 'Sexta-feira', inicio: null, termino: null },
      { dia: 'Sábado', inicio: null, termino: null },
    
    ]}
  
  ngOnInit(){

  }

  addHorario(){
    console.log(this.horarios);
      for(let horario of this.horarios){ 
      this.horarioService.inserirHorarios(horario);
  }
}
  
}

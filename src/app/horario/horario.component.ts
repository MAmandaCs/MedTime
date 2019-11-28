import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HorarioService } from 'src/app/servicos/horarioService';
import { Horario } from 'src/entidades/horario';

declare var $: any;
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  // horarios: ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];
  // formBuilder: any;

  horario: Horario;

  constructor(private horarioService: HorarioService){

    this.horario = new Horario();

  //  this.horarios = [
  //      { profissional: 'Dentista', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00'},
  //      { profissional: 'Clinico', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00'},
  //      { profissional: 'Pré-natal', segunda: '09:00-12:00', terca: '09:00-12:00', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00'},
  //      { profissional: 'Psicologo', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '09:00-12:00', sexta: '09:00-12:00'},
  //      { profissional: 'Fisoterapeuta', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00'},
  //      { profissional: 'Enfermeiro ', segunda: '09:00-12:00', terca: '-', quarta: '09:00-12:00', quinta: '-', sexta: '09:00-12:00'}
  //    ];
}
    ngOnInit(){

      $(document).ready(function(){
        $('.datepicker').datepicker({
          autoClose: true,
          format: 'ddd',
          disableWeekends: true
        });

      });

      $(document).ready(function(){
        $('.timepicker').timepicker();

      });
  }

// buildHorarios() {
//   const values = this.horarios.map(v => new FormControl(false));
//   return this.formBuilder.array(values);
//    }

   addHorario(){
    //console.log("ccee");
    this.horarioService.inserirHorario(this.horario);
     this.horario = new Horario();
   }




}

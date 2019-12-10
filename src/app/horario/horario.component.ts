import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HorarioService } from 'src/app/servicos/horarioService';
import { Horario } from 'src/entidades/horario';
import { format } from 'url';

declare var $: any;
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  // horarios: ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];
  // formBuilder: any;

  horarios: Horario[];

  constructor(private horarioService: HorarioService){
    this.horarios = [
      { indice: 1, dia: 'Segunda-feira', possuiAtendimento: false, inicio: null, termino: null },
      { indice: 2, dia: 'Terça-feira', possuiAtendimento: false, inicio: null, termino: null },
      { indice: 3, dia: 'Quarta-feira', possuiAtendimento: false, inicio: null, termino: null},
      { indice: 4, dia: 'Quinta-feira', possuiAtendimento: false, inicio: null, termino: null },
      { indice: 5, dia: 'Sexta-feira', possuiAtendimento: false, inicio: null, termino: null },
      { indice: 6, dia: 'Sábado', possuiAtendimento: false, inicio: null, termino: null },
    
    ]
    //this.horarios = new Horario();

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


      // $(document).ready(function(){
      //   $('.datepicker').datepicker({
      //     autoClose: true,
      //     format: 'ddd',
      //     disableWeekends: true
      //   });
        
      // });

      // $(document).ready(function(){
      //   $('.timepicker').timepicker();
        
      // });

  $(document).ready(function(){
    $('.tabs').tabs();
  });

  $('.inicioSelect').change(function inicioChange(){
    console.log($(this).val());
  });
  
  $('.terminoSelect').change(function terminoChange(){
  console.log($(this).val());
});

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
     for(let horario of this.horarios){ 
     this.horarioService.inserirHorario(horario);
     console.log("eee");}
   
    }
  
}

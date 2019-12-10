import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-exame-paciente',
  templateUrl: './exame-paciente.component.html',
  styleUrls: ['./exame-paciente.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamePacienteComponent implements OnInit {

  exames: any;
  exameSelecionado: any;
  constructor() {
    this.exames = [{exame: 'ultrassom.pdf'}, { exame: 'ultrassonografia.pdf'}];
    this.exameSelecionado = {};
  }

  ngOnInit() {
  }
  selecionarExame(exame) {
    this.exameSelecionado = exame;
  }
}

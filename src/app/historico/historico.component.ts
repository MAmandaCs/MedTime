import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  agendamentos: any;
  exames: any;
  exameSelecionado: any;

  constructor() {
  this.agendamentos = [{ profissional: 'clinico', dia: '08/01'}];
  this.exames = [{exame: 'ultrassom.pdf'}, { exame: 'ultrassonografia.pdf'}];
  this.exameSelecionado = {};
}

  ngOnInit() {
  }
  selecionarExame(exame) {
    this.exameSelecionado = exame;
  }
}

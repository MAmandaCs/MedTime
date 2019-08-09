import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {
  exames: any;
  exameSelecionado: any;
  constructor() {
  this.exames = [{exame: 'ultrassom.pdf'}, { exame: 'ultrassonografia.pdf'}];
  this.exameSelecionado = {};
  }

  ngOnInit( ) {
  }
  selecionarExame(exame) {
    this.exameSelecionado = exame;
  }
}

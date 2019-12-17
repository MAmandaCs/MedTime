import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {
  exames: any;
  exameSelecionado: any;

  constructor(private router: Router) {
  this.exames = [{exame: 'ultrassom.pdf'}, { exame: 'ultrassonografia.pdf'}];
  this.exameSelecionado = {};
  }

  ngOnInit( ) {
  }

  selecionarExame(exame) {
    this.exameSelecionado = exame;
  }

  voltar() {
      this.router.navigate(['posto']);
    
  }

}

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  agendamentos: any;
  agendamentoSelecionado: any;

  constructor() {
    this.agendamentos = [{ profissional: 'clinico', horario: '8:00'}];
    this.agendamentoSelecionado = {};
  }

  ngOnInit() {
  }
  selecionarAgendamento(agendamento) {
    this.agendamentoSelecionado = agendamento;
  }

}

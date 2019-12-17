import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dados-posto',
  templateUrl: './dados-posto.component.html',
  styleUrls: ['./dados-posto.component.css']
})
export class DadosPostoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.tabs').tabs();
    });
  }

}

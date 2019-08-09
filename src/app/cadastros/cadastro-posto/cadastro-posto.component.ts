import { Component, OnInit } from '@angular/core';
import { CadastroPosto } from 'src/entidades/cadastroPosto';
import { PostoService } from 'src/app/servicos/postoService';

@Component({
  selector: 'app-cadastro-posto',
  templateUrl: './cadastro-posto.component.html',
  styleUrls: ['./cadastro-posto.component.css']
})
export class CadastroPostoComponent implements OnInit {

  funcPosto: CadastroPosto;
  funcionarios: CadastroPosto[];
  carregando = true;

  constructor(private postoService: PostoService) { 
    this.funcPosto = new CadastroPosto();
  }
  
  ngOnInit() {
  }

  cadastrar() {
    this.postoService.inserir(this.funcPosto)
      .then(() => {
        alert('Cadastro realizado com sucesso');
        this.funcPosto = new CadastroPosto();
      
    });
  }
}

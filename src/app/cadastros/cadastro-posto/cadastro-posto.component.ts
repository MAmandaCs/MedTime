import { Component, OnInit } from '@angular/core';
import { CadastroPosto } from 'src/entidades/cadastroPosto';
import { PostoService } from 'src/app/servicos/postoService';
import { LoginService } from 'src/app/servicos/loginService';

@Component({
  selector: 'app-cadastro-posto',
  templateUrl: './cadastro-posto.component.html',
  styleUrls: ['./cadastro-posto.component.css']
})
export class CadastroPostoComponent implements OnInit {

  funcPosto: CadastroPosto;
  funcionarios: CadastroPosto[];
  carregando = true;
  dataNascimento: any;

  constructor(private postoService: PostoService, private loginService: LoginService) { 
    this.funcPosto = new CadastroPosto();
  }
  
  ngOnInit() {
  }

  cadastrar() {
    this.funcPosto.dtNasc = new Date(this.dataNascimento).getTime();
    this.postoService.inserir(this.funcPosto)
      .then(() => {
        this.loginService.criarUser(this.funcPosto.email, this.funcPosto.senha);
        this.dataNascimento = new Date();
        this.funcPosto = new CadastroPosto();
        alert('Funcionário inserido no posto');
      
    });
  }

  verificarSenha(senha: string, confSenha: string){
    if(senha === confSenha){
      return true;
    }
    return false;
  }

  addFuncionario(){
    this.verificarSenha(this.funcPosto.senha, this.funcPosto.confSenha);
    if(this.verificarSenha(this.funcPosto.senha, this.funcPosto.confSenha) == true){
      this.cadastrar()
    }else{
      alert('Digite a mesma senha nos campos "Senha" e "Confirmar Senha"');
      this.funcPosto.senha = '';
      this.funcPosto.confSenha = '';
  }
}
}

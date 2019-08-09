import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { PerfilUsuarioComponent } from './perfil/perfil-usuario/perfil-usuario.component';
import { DentistaComponent } from './dentista/dentista/dentista.component';
import { ClinicoComponent } from './clinico/clinico.component';
import { PreNatalComponent } from './pre-natal/pre-natal.component';
import { EncaminhamentoComponent } from './encaminhamento/encaminhamento.component';
import { PsicologoComponent } from './psicologo/psicologo.component';
import { FisioterapiaComponent } from './fisioterapia/fisioterapia.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ExamesComponent } from './exames/exames.component';
import { HistoricoComponent } from './historico/historico.component';
import { HorarioComponent } from './horario/horario.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { CadastroPostoComponent } from './cadastros/cadastro-posto/cadastro-posto.component';
import { PerfilPostoComponent } from './perfil/perfil-posto/perfil-posto.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CadastroPacienteComponent } from "./cadastros/cadastro-paciente/cadastro-paciente.component";
import { DatabaseService } from './servicos/databaseService';
import { PacienteService } from './servicos/pacienteService';
import { PostoService } from './servicos/postoService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    DentistaComponent,
    ClinicoComponent,
    PreNatalComponent,
    EncaminhamentoComponent,
    PsicologoComponent,
    FisioterapiaComponent,
    AgendamentoComponent,
    ExamesComponent,
    HistoricoComponent,
    HorarioComponent,
    MeusDadosComponent,
    CadastroPostoComponent,
    PerfilPostoComponent,
    FuncionarioComponent,
    CadastroPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [DatabaseService, PacienteService, PostoService],
  bootstrap: [AppComponent]
})

export class AppModule { }

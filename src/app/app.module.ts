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
import { PreNatalComponent } from './pediatria/pre-natal.component';
import { EncaminhamentoComponent } from './encaminhamento/encaminhamento.component';
import { PsicologoComponent } from './psicologo/psicologo.component';
import { FisioterapiaComponent } from './fisioterapia/fisioterapia.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ExamesComponent } from './exames/exames.component';
import { HistoricoComponent } from './historico/historico.component';
import { HorarioComponent } from './horario/horario.component';
import { HorariosComponent } from './horarios/horarios.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { CadastroPostoComponent } from './cadastros/cadastro-posto/cadastro-posto.component';
import { PerfilPostoComponent } from './perfil/perfil-posto/perfil-posto.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CadastroPacienteComponent } from './cadastros/cadastro-paciente/cadastro-paciente.component';
import { DatabaseService } from './servicos/databaseService';
import { PacienteService } from './servicos/pacienteService';
import { PostoService } from './servicos/postoService';
import { LoginService } from './servicos/loginService';
import { HorarioService } from './servicos/horarioService';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { ExamePacienteComponent } from './exame-paciente/exame-paciente.component';
import { HorariosService } from './servicos/horariosService';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TabelaHorariosComponent } from './tabelaHorarios/tabelaHorarios.component';
import { DadosPostoComponent } from './dados-posto/dados-posto.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginAdmComponent } from './login-adm/login-adm.component';
import { LoginAdmService } from './servicos/loginAdmService';
import { TesteComponent } from './teste/teste.component';
import { EspecialidadeService } from './servicos/especialidadeService';
import { AngularFirestore } from 'angularfire2/firestore'; 
import { ExamesService } from './servicos/examesService';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireStorage } from 'angularfire2/storage';


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
    HorariosComponent,
    MeusDadosComponent,
    CadastroPostoComponent,
    PerfilPostoComponent,
    FuncionarioComponent,
    CadastroPacienteComponent,
    ExamePacienteComponent,
    TabelaHorariosComponent,
    DadosPostoComponent,
    InicioComponent,
    LoginAdmComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    Ng2SearchPipeModule,
    AngularFireStorageModule
    
  ],
  providers: [DatabaseService, 
    PacienteService, 
    PostoService, 
    LoginService, 
    LoginAdmService, 
    HorarioService, 
    HorariosService, 
    EspecialidadeService, 
    ExamesService, 
    AngularFireAuth, 
    AuthGuard,
    AngularFirestore,
    AngularFireStorage,
    
  ],
    
  bootstrap: [AppComponent]
})

export class AppModule { }

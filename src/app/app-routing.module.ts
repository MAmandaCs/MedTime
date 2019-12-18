import { CadastroPostoComponent } from './cadastros/cadastro-posto/cadastro-posto.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilUsuarioComponent } from './perfil/perfil-usuario/perfil-usuario.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ClinicoComponent } from './clinico/clinico.component';
import { DentistaComponent } from './dentista/dentista/dentista.component';
import { EncaminhamentoComponent } from './encaminhamento/encaminhamento.component';
import { ExamesComponent } from './exames/exames.component';
import { FisioterapiaComponent } from './fisioterapia/fisioterapia.component';
import { HistoricoComponent } from './historico/historico.component';
import { HorarioComponent } from './horario/horario.component';
import { PsicologoComponent } from './psicologo/psicologo.component';
import { PreNatalComponent } from './pediatria/pre-natal.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { PerfilPostoComponent } from './perfil/perfil-posto/perfil-posto.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CadastroPacienteComponent } from './cadastros/cadastro-paciente/cadastro-paciente.component';
import { ExamePacienteComponent } from './exame-paciente/exame-paciente.component';
import { LoginService } from './servicos/loginService';
import { HorariosComponent } from './horarios/horarios.component';
import { TabelaHorariosComponent } from './tabelaHorarios/tabelaHorarios.component';
<<<<<<< HEAD
import { DadosPostoComponent } from './dados-posto/dados-posto.component';
=======
import { InicioComponent } from './inicio/inicio.component';
import { LoginAdmComponent } from './login-adm/login-adm.component';
>>>>>>> 05394d30d06b6aa354ce124fad96fc390d80920d



const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'perfil', component: PerfilUsuarioComponent},
  {path: 'cadastro', component: CadastroPacienteComponent},
  {path: 'cadastroposto', component: CadastroPostoComponent},
  {path: 'agendamento', component: AgendamentoComponent},
  {path: 'clinico', component: ClinicoComponent},
  {path: 'dentista', component: DentistaComponent},
  {path: 'encaminhamento', component: EncaminhamentoComponent},
  {path: 'exames', component: ExamesComponent},
  {path: 'fisioterapia', component: FisioterapiaComponent},
  {path: 'historico', component: HistoricoComponent},
  {path: 'horario', component: HorarioComponent},
  {path: 'horarios', component: HorariosComponent},
  {path: 'psicologo', component: PsicologoComponent},
  {path: 'preNatal', component: PreNatalComponent},
  {path: 'meusDados', component: MeusDadosComponent},
  {path: 'posto', component: PerfilPostoComponent},
  {path: 'funcionario', component: FuncionarioComponent},
<<<<<<< HEAD
  {path: 'examePac', component: ExamePacienteComponent},
  {path: 'tabelaHorarios', component: TabelaHorariosComponent},
  {path: 'dadosPosto', component: DadosPostoComponent}

=======
  {path: 'examePac', component:ExamePacienteComponent},
  {path: 'tabelaHorarios', component:TabelaHorariosComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'loginAdm', component:LoginAdmComponent}
>>>>>>> 05394d30d06b6aa354ce124fad96fc390d80920d


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

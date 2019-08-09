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
import { PreNatalComponent } from './pre-natal/pre-natal.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { PerfilPostoComponent } from './perfil/perfil-posto/perfil-posto.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CadastroPacienteComponent } from "./cadastros/cadastro-paciente/cadastro-paciente.component";


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
  {path: 'psicologo', component: PsicologoComponent},
  {path: 'preNatal', component: PreNatalComponent},
  {path: 'meusDados', component: MeusDadosComponent},
  {path: 'posto', component: PerfilPostoComponent},
  {path: 'funcionarios', component: FuncionarioComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

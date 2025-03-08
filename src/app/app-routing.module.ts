import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarVeiculosComponent } from './components/gerenciar-veiculos/gerenciar-veiculos.component';
import { GerenciarEmpresasComponent } from './components/gerenciar-empresas/gerenciar-empresas.component';
import { GerenciarPlanosComponent } from './components/gerenciar-planos/gerenciar-planos.component';
import { GerenciarVeiculoAssistenciaPlanoComponent } from './components/gerenciar-veiculo-assistencia-plano/gerenciar-veiculo-assistencia-plano.component';
import { AdicionarVeiculoComponent } from './components/adicionar-veiculo/adicionar-veiculo.component';
import { GerenciarGruposComponent } from './components/gerenciar-grupos/gerenciar-grupos.component';
import { EditarVeiculoComponent } from './components/editar-veiculo/editar-veiculo.component';
import { AdicionarGrupoComponent } from './components/adicionar-grupo/adicionar-grupo.component';
import { EditarGrupoComponent } from './components/editar-grupo/editar-grupo.component';
import { AdicionarEmpresaComponent } from './components/adicionar-empresa/adicionar-empresa.component';
import { AdicionarPlanoAssistenciaComponent } from './components/adicionar-plano-assistencia/adicionar-plano-assistencia.component';
import { AdicionarVeiculoAssistenciaPlanoComponent } from './components/adicionar-veiculo-assistencia-plano/adicionar-veiculo-assistencia-plano.component';

const routes: Routes = [
  { path: 'gerenciar-veiculos', component: GerenciarVeiculosComponent },
  { path: 'gerenciar-empresas', component: GerenciarEmpresasComponent },
  { path: 'adicionar-empresa', component: AdicionarEmpresaComponent },
  { path: 'editar-empresa/:id', component: EditarEmpresaComponent },
  { path: 'gerenciar-planos', component: GerenciarPlanosComponent },
  { path: 'adicionar-plano', component: AdicionarPlanoAssistenciaComponent },
  { path: 'editar-plano/:id', component: AdicionarPlanoAssistenciaComponent },
  { path: 'gerenciar-veiculo-assistencia-plano', component: GerenciarVeiculoAssistenciaPlanoComponent },
  { path: 'adicionar-veiculo-assistencia-plano', component: AdicionarVeiculoAssistenciaPlanoComponent },
  { path: 'editar-associacao/:id', component: AdicionarVeiculoAssistenciaPlanoComponent },
  { path: '', redirectTo: '/gerenciar-veiculos', pathMatch: 'full' },
  { path: 'adicionar-veiculo', component: AdicionarVeiculoComponent },
  { path: 'editar-veiculo/:id', component: EditarVeiculoComponent },
  { path: 'gerenciar-grupos', component: GerenciarGruposComponent },
  { path: 'adicionar-grupo', component: AdicionarGrupoComponent },
  { path: 'editar-grupo/:id', component: EditarGrupoComponent },
  { path: 'gerenciar-veiculos-assistencia', component: GerenciarVeiculoAssistenciaPlanoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

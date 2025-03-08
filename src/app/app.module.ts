import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GerenciarVeiculosComponent } from './components/gerenciar-veiculos/gerenciar-veiculos.component';
import { GerenciarEmpresasComponent } from './components/gerenciar-empresas/gerenciar-empresas.component';
import { GerenciarPlanosComponent } from './components/gerenciar-planos/gerenciar-planos.component';
import { GerenciarVeiculoAssistenciaPlanoComponent } from './components/gerenciar-veiculo-assistencia-plano/gerenciar-veiculo-assistencia-plano.component';
import { AdicionarVeiculoComponent } from './components/adicionar-veiculo/adicionar-veiculo.component';
import { GerenciarGruposComponent } from './components/gerenciar-grupos/gerenciar-grupos.component';
import { EditarVeiculoComponent } from './components/editar-veiculo/editar-veiculo.component';
import { AdicionarEmpresaComponent } from './components/adicionar-empresa/adicionar-empresa.component';
import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { AdicionarGrupoComponent } from './components/adicionar-grupo/adicionar-grupo.component';
import { EditarGrupoComponent } from './components/editar-grupo/editar-grupo.component';
import { AdicionarPlanoAssistenciaComponent } from './components/adicionar-plano-assistencia/adicionar-plano-assistencia.component';
import { EditarPlanoAssistenciaComponent } from './components/editar-plano-assistencia/editar-plano-assistencia.component';
import { AdicionarVeiculoAssistenciaPlanoComponent } from './components/adicionar-veiculo-assistencia-plano/adicionar-veiculo-assistencia-plano.component';
import { EditarVeiculoAssistenciaPlanoComponent } from './components/editar-veiculo-assistencia-plano/editar-veiculo-assistencia-plano.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { CustomPaginatorIntl } from './service/custom-paginator-intl';
import { ConfirmarExclusaoComponent } from './components/confirmar-exclusao/confirmar-exclusao.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfirmarExclusaoGrupoComponent } from './components/confirmar-exclusao-grupo/confirmar-exclusao-grupo.component';
import { ConfirmarExclusaoPlanoComponent } from './components/confirmar-exclusao-plano/confirmar-exclusao-plano.component';
import { ConfirmarExclusaoPlanoVeiculoComponent } from './components/confirmar-exclusao-plano-veiculo/confirmar-exclusao-plano-veiculo.component';
import { ConfirmarExclusaoEmpresaComponent } from './components/confirmar-exclusao-empresa/confirmar-exclusao-empresa.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GerenciarVeiculosComponent,
    GerenciarEmpresasComponent,
    GerenciarPlanosComponent,
    GerenciarVeiculoAssistenciaPlanoComponent,
    AdicionarVeiculoComponent,
    GerenciarGruposComponent,
    EditarVeiculoComponent,
    AdicionarEmpresaComponent,
    EditarEmpresaComponent,
    AdicionarGrupoComponent,
    EditarGrupoComponent,
    AdicionarPlanoAssistenciaComponent,
    EditarPlanoAssistenciaComponent,
    AdicionarVeiculoAssistenciaPlanoComponent,
    EditarVeiculoAssistenciaPlanoComponent,
    CabecalhoComponent,
    ConfirmarExclusaoComponent,
    ConfirmarExclusaoGrupoComponent,
    ConfirmarExclusaoPlanoComponent,
    ConfirmarExclusaoPlanoVeiculoComponent,
    ConfirmarExclusaoEmpresaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule

  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginatorIntl() },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

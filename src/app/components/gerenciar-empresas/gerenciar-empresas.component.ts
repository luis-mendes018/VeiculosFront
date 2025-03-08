import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api-service.service';
import { ConfirmarExclusaoEmpresaComponent } from '../confirmar-exclusao-empresa/confirmar-exclusao-empresa.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-gerenciar-empresas',
  templateUrl: './gerenciar-empresas.component.html',
  styleUrls: ['./gerenciar-empresas.component.css']
})
export class GerenciarEmpresasComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'endereco', 'acoes'];
  dataSource = new MatTableDataSource<any>([]);
  pageSize: number = 5;
  pageIndex: number = 0;
  totalRecords: number = 0;
  totalPages: number = 0;
  empresasAssistencia: any[] = [];
  searchControl = new FormControl('');

  constructor(private apiService: ApiService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadEmpresasAssistencia();

    // Configurar busca dinâmica com debounceTime
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(nome => {
      if (nome && nome.trim() !== '') {
        this.pageIndex = 0; // Voltar para a primeira página ao buscar
        this.buscarEmpresasAssistencia(nome, this.pageIndex + 1, this.pageSize);
      } else {
        this.loadEmpresasAssistencia(); // Se a busca for apagada, volta ao estado original
      }
    });
  }

  // Método para carregar empresas assistenciais
  loadEmpresasAssistencia(): void {
    this.apiService.getEmpresasAssistencia(this.pageIndex + 1, this.pageSize).subscribe((response) => {
      if (response && response.empresasAssistencia) {
        this.empresasAssistencia = response.empresasAssistencia;
        this.dataSource.data = this.empresasAssistencia;
        this.totalRecords = response.totalEmpresasAssistencia;
        this.totalPages = Math.ceil(this.totalRecords / this.pageSize); // Atualiza o total de páginas
      } else {
        console.error('Dados de empresas assistenciais não encontrados na resposta:', response);
      }
    }, (error) => {
      console.error('Erro ao carregar empresas assistenciais:', error);
    });
  }

  buscarEmpresasAssistencia(nome: string, pageNumber: number, pageSize: number): void {
    if (!nome.trim()) {
      this.loadEmpresasAssistencia(); // Se o campo estiver vazio, carregar todas as empresas
      return;
    }

    this.apiService.buscarEmpresasAssistencia(nome, pageNumber, pageSize).subscribe((response) => {
      if (response && response.empresasAssistencia) {
        this.empresasAssistencia = response.empresasAssistencia;
        this.dataSource.data = this.empresasAssistencia;
        this.totalRecords = response.totalEmpresasAssistencia;
        this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
      } else {
        console.error('Dados de empresas assistenciais não encontrados na resposta:', response);
      }
    }, (error) => {
      console.error('Erro ao buscar empresas assistenciais:', error);
    });
  }

  // Método para mudar de página
 // Método para mudar de página no paginator
   onPageChange(event: PageEvent) {
     this.pageIndex = event.pageIndex;
     this.pageSize = event.pageSize;

     if (this.searchControl.value && this.searchControl.value.trim() !== '') {
       this.buscarEmpresasAssistencia(this.searchControl.value, this.pageIndex + 1, this.pageSize);
     } else {
       this.loadEmpresasAssistencia();
     }
   }

  adicionarEmpresaAssistencia(): void {
    this.router.navigate(['/adicionar-empresa']); // Redireciona para a tela de adicionar empresa
  }

  editarEmpresaAssistencia(id: number): void {
    this.router.navigate([`/editar-empresa/${id}`]);
  }

  // Método para abrir o dialog de confirmação de exclusão
  excluirEmpresa(id: number): void {
    const dialogRef = this.dialog.open(ConfirmarExclusaoEmpresaComponent, {
      width: '400px',
      data: { id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluirEmpresaAssistencia(id);
      }
    });
  }

  // Método para excluir empresa assistencial
  excluirEmpresaAssistencia(id: number): void {
    this.apiService.excluirEmpresaAssistencia(id).subscribe(() => {
      this.loadEmpresasAssistencia(); // Recarrega a lista após a exclusão
    });
  }
}

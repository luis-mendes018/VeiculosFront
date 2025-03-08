import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api-service.service';
import { ConfirmarExclusaoPlanoComponent } from '../confirmar-exclusao-plano/confirmar-exclusao-plano.component';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gerenciar-planos',
  templateUrl: './gerenciar-planos.component.html',
  styleUrls: ['./gerenciar-planos.component.css'],
})
export class GerenciarPlanosComponent {
  displayedColumns: string[] = ['descricao', 'cobertura', 'acoes'];
  dataSource = new MatTableDataSource<any>([]);
  pageSize: number = 5;
  pageIndex: number = 0;
  totalRecords: number = 0;
  totalPages: number = 0;
  planosAssistencia: any[] = [];
  searchControl = new FormControl('');

  constructor(
    private apiService: ApiService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPlanosAssistencia();

    // Configurar busca dinâmica com debounceTime
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((descricao) => {
        this.loadPlanosAssistencia(); // Se a busca for apagada, volta ao estado original
      });
  }

  // Método para carregar planos de assistência
  loadPlanosAssistencia(): void {
    this.apiService
      .getPlanosAssistencia(this.pageIndex + 1, this.pageSize)
      .subscribe(
        (response) => {
          if (response && response.planosAssistencia) {
            this.planosAssistencia = response.planosAssistencia;
            this.dataSource.data = this.planosAssistencia;
            this.totalRecords = response.totalPlanosAssistencia;
            this.totalPages = Math.ceil(this.totalRecords / this.pageSize); // Atualiza o total de páginas
          } else {
            console.error(
              'Dados de planos de assistência não encontrados na resposta:',
              response
            );
          }
        },
        (error) => {
          console.error('Erro ao carregar planos de assistência:', error);
        }
      );
  }

  // Método para mudar de página no paginator
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.loadPlanosAssistencia();
  }

  // Método para redirecionar para a tela de adicionar plano
  adicionarPlanoAssistencia(): void {
    this.router.navigate(['/adicionar-plano']);
  }

  // Método para redirecionar para a tela de edição de plano
  editarPlanoAssistencia(id: number): void {
    this.router.navigate([`/editar-plano/${id}`]);
  }

  // Método para abrir o dialog de confirmação de exclusão
  excluirPlano(id: number): void {
    const dialogRef = this.dialog.open(ConfirmarExclusaoPlanoComponent, {
      width: '400px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.excluirPlanoAssistencia(id);
      }
    });
  }

  // Método para excluir plano de assistência
  excluirPlanoAssistencia(id: number): void {
    this.apiService.excluirPlanoAssistencia(id).subscribe(() => {
      this.loadPlanosAssistencia(); // Recarrega a lista após a exclusão
    });
  }
}

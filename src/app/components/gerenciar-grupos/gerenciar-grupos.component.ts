import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api-service.service';
import { ConfirmarExclusaoGrupoComponent } from '../confirmar-exclusao-grupo/confirmar-exclusao-grupo.component';

@Component({
  selector: 'app-gerenciar-grupos',
  templateUrl: './gerenciar-grupos.component.html',
  styleUrls: ['./gerenciar-grupos.component.css']
})
export class GerenciarGruposComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<any>([]);
  pageSize: number = 5;
  pageIndex: number = 0;
  totalRecords: number = 0;
  grupos: any[] = [];
  searchControl = new FormControl('');

  constructor(private apiService: ApiService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadGrupos();
    console.log(this.loadGrupos());

    // Configurar busca dinâmica com debounceTime
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(nome => {
      if (nome && nome.trim() !== '') {
        this.pageIndex = 0; // Voltar para a primeira página ao buscar
        this.buscarGrupos(nome, this.pageIndex + 1, this.pageSize);
      } else {
        this.loadGrupos(); // Se a busca for apagada, volta ao estado original
      }
    });
  }

  // Método para carregar grupos
  loadGrupos() {
    this.apiService.getGruposVeiculos(this.pageIndex + 1, this.pageSize).subscribe((response) => {
      console.log('Resposta da API (loadGrupos):', response); // Log da resposta
      if (response && response.gruposVeiculos) {
        this.grupos = response.gruposVeiculos;
        this.dataSource.data = this.grupos;
        this.totalRecords = response.totalGruposVeiculos;
      } else {
        console.error('Dados de grupos não encontrados na resposta:', response);
      }
    }, (error) => {
      console.error('Erro ao carregar grupos:', error);
    });
  }

  buscarGrupos(nome: string, pageNumber: number, pageSize: number) {
    if (!nome.trim()) {
      this.loadGrupos(); // Se o campo estiver vazio, carregar todos os grupos
      return;
    }

    this.apiService.buscarGruposVeiculos(nome, pageNumber, pageSize).subscribe((response) => {
      console.log('Resposta da API (buscarGrupos):', response); // Log da resposta
      if (response && response.gruposVeiculos) {
        this.grupos = response.gruposVeiculos;
        this.dataSource.data = this.grupos;
        this.totalRecords = response.totalGruposVeiculos;
      } else {
        console.error('Dados de grupos não encontrados na resposta:', response);
      }
    }, (error) => {
      console.error('Erro ao buscar grupos:', error);
    });
  }


  // Método para mudar de página no paginator
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    if (this.searchControl.value && this.searchControl.value.trim() !== '') {
      this.buscarGrupos(this.searchControl.value, this.pageIndex + 1, this.pageSize);
    } else {
      this.loadGrupos();
    }
  }

  adicionarGrupo(): void {
    this.router.navigate(['/adicionar-grupo']);  // Redireciona para a tela de adicionar grupo
  }

  editarGrupo(id: number): void {
    this.router.navigate([`/editar-grupo/${id}`]);
  }

  // Método para excluir grupo
  excluirGrupo(id: number): void {
    const grupo = this.grupos.find((g) => g.id === id);

    if (grupo) {
      // Abrir o modal de confirmação
      const dialogRef = this.dialog.open(ConfirmarExclusaoGrupoComponent, {
        width: '400px',
        data: { grupo }
      });

      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.apiService.excluirGrupoVeiculo(id).subscribe(() => {
            this.loadGrupos(); // Recarrega a lista após a exclusão
          });
        }
      });
    } else {
      console.error('Grupo não encontrado!');
    }
  }
}

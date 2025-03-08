
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api-service.service';
import { ConfirmarExclusaoComponent } from '../confirmar-exclusao/confirmar-exclusao.component';
import { Veiculo } from 'src/app/interfaces/Veiculo';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-gerenciar-veiculos',
  templateUrl: './gerenciar-veiculos.component.html',
  styleUrls: ['./gerenciar-veiculos.component.css']
})
export class GerenciarVeiculosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'modelo', 'placa', 'grupo', 'acoes'];
  dataSource = new MatTableDataSource<any>([]);
  pageSize: number = 5;
  pageIndex: number = 0;
  totalRecords: number = 0;
  veiculos: Veiculo[] = [];
  searchControl = new FormControl('');

  constructor(private apiService: ApiService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadVeiculos();

    // Configurar a busca dinâmica com debounceTime (atraso de 500ms)
    this.searchControl.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((nome: string | null) => {
      this.searchControl.valueChanges
    .pipe(debounceTime(300), distinctUntilChanged()) 
    .subscribe(nome => {
      if (nome && nome.trim() !== '') {
        this.pageIndex = 0;
        this.buscarVeiculos(nome, this.pageIndex + 1, this.pageSize);
      } else {
        this.loadVeiculos();
      }
    });
    });

  }

  // Método para carregar veículos
  loadVeiculos() {
    this.apiService.getVeiculos(this.pageIndex + 1, this.pageSize).subscribe((response) => {
      this.veiculos = response.veiculos;
      this.dataSource.data = response.veiculos;
      this.totalRecords = response.totalVeiculos;
    });
  }

  buscarVeiculos(nome: string, p0: number, pageSize: number) {
    if (!nome.trim()) {
      this.loadVeiculos(); // Se o campo estiver vazio, carregar todos os veículos
      return;
    }

    this.apiService.buscarVeiculos(nome, this.pageIndex + 1, this.pageSize).subscribe((response) => {
      this.veiculos = response.veiculos;
      this.dataSource.data = this.veiculos;
      this.totalRecords = response.totalVeiculos;
    });
  }


  // Método para mudar de página no paginator
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    if (this.searchControl.value && this.searchControl.value.trim() !== '') {
      this.buscarVeiculos(this.searchControl.value, this.pageIndex + 1, this.pageSize);
    } else {
      this.loadVeiculos();
    }
  }

  adicionarVeiculo(): void {
    this.router.navigate(['/adicionar-veiculo']);  // Redireciona para a rota de adicionar produto
  }

  editarVeiculo(id: number): void {
    this.router.navigate([`/editar-veiculo/${id}`]);
  }

  // Método para excluir veículo
  excluirVeiculo(id: number): void {
    //console.log('ID recebido:', id);
    //console.log('Lista de veículos:', this.veiculos);
    // Verifique se os veículos já foram carregados
    const veiculo = this.veiculos.find((v: Veiculo) => v.id === id);

    if (veiculo) {
      // Abrir o modal de confirmação
      const dialogRef = this.dialog.open(ConfirmarExclusaoComponent, {
        width: '400px',
        data: { veiculo }
      });

      dialogRef.afterClosed().subscribe((result: boolean) => { // Especifique o tipo como 'boolean'
        if (result) {
          this.apiService.excluirVeiculo(id).subscribe(() => {
            this.loadVeiculos(); // Recarrega a lista de veículos após a exclusão
          });
        }
      });
    } else {
      console.error('Veículo não encontrado!');
    }
  }
}

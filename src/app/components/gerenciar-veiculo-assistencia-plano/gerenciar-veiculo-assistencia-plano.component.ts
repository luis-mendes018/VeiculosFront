import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-gerenciar-veiculo-assistencia-plano',
  templateUrl: './gerenciar-veiculo-assistencia-plano.component.html',
  styleUrls: ['./gerenciar-veiculo-assistencia-plano.component.css']
})
export class GerenciarVeiculoAssistenciaPlanoComponent implements OnInit {
  // Definindo tipos explícitos
  veiculosAssistencia: any[] = [];
  totalRecords: number = 0;
  pageSize = 5;
  pageIndex = 0;
  dataSource: any[] = []; // Especificando o tipo corretamente

  // Dados para adição de novo vínculo
  novoVeiculoPlano = { veiculoId: 0, planoId: 0 };
  planosDisponiveis: any[] = [];
  veiculosDisponiveis: any[] = [];

  displayedColumns: string[] = ['id','veiculo', 'plano', 'empresa', 'acoes'];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.carregarVeiculosAssistencia();
    this.carregarVeiculos();
  }

  // Carrega a lista de associações entre veículos e planos
  carregarVeiculosAssistencia(): void {
    this.apiService.getVeiculosAssistencia(this.pageIndex + 1, this.pageSize).subscribe(
      (response) => {
        this.veiculosAssistencia = response.veiculosAssistencia;
        this.totalRecords = response.totalVeiculosAssistencia;
        this.dataSource = this.veiculosAssistencia; // Atualiza o dataSource da tabela
      },
      (error) => {
        console.error('Erro ao carregar veículos com planos:', error);
      }
    );
  }

  // Carrega a lista de todos os veículos
  carregarVeiculos(): void {
    this.apiService.getTodosVeiculos().subscribe(
      (response) => {
        this.veiculosDisponiveis = response;
      },
      (error) => {
        console.error('Erro ao carregar veículos:', error);
      }
    );
  }

  // Carrega os planos disponíveis para o veículo selecionado
  carregarPlanos(veiculoId: number): void {
    this.apiService.getPlanosPorVeiculo(veiculoId).subscribe(
      (response) => {
        this.planosDisponiveis = response;
      },
      (error) => {
        console.error('Erro ao carregar planos:', error);
      }
    );
  }

  adicionarPlanoVeiculoAssistencia(): void {
    this.router.navigate(['/adicionar-veiculo-assistencia-plano']);
  }

  onExcluir(id: number): void {
    const confirmacao = window.confirm('Tem certeza de que deseja excluir esta associação?');

    if (confirmacao) {
      this.apiService.removerVeiculoPlano(id).subscribe({
        next: () => {
          console.log('Associação removida com sucesso!');
          window.location.reload();
        },
        error: (error) => {
          console.error('Erro ao excluir associação:', error);
        }
      });
    } else {
      console.log('Exclusão cancelada.');
    }
  }


  // Manipula a mudança de página na tabela
  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.carregarVeiculosAssistencia(); // Recarrega os dados de acordo com a nova página
  }
}


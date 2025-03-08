import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-adicionar-veiculo-assistencia-plano',
  templateUrl: './adicionar-veiculo-assistencia-plano.component.html',
  styleUrls: ['./adicionar-veiculo-assistencia-plano.component.css']
})
export class AdicionarVeiculoAssistenciaPlanoComponent implements OnInit {
  associacaoForm!: FormGroup;
  veiculos: any[] = [];
  planos: any[] = [];
  empresas: any[] = [];
  planosAssistencia: any[] = [];
  associacaoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.carregarVeiculos();
    this.carregarPlanos();

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.associacaoId = +id; // Converte para número
        this.carregarDadosAssociacao(this.associacaoId);
      }
    });
  }

  inicializarFormulario(): void {
    this.associacaoForm = this.fb.group({
      id: [0],
      veiculoId: ['', Validators.required],
      planoId: ['', Validators.required]
    });
  }

  carregarEmpresas(): void {
    this.apiService.getTodasEmpresasAssistencia().subscribe(
      (response) => {
        this.empresas = response;
        this.carregarPlanos(); // Carregar planos após carregar empresas
      },
      (error) => console.error('Erro ao carregar empresas:', error)
    );
  }

  carregarVeiculos(): void {
    this.apiService.getTodosVeiculos().subscribe({
      next: (response) => {
        this.veiculos = response;
      },
      error: (error) => {
        console.error('Erro ao carregar veículos:', error);
      }
    });
  }

  carregarPlanos(): void {
    this.apiService.getTodosPlanosAssistencia().subscribe((data: any[]) => {
      this.planosAssistencia = data.map((plano: any) => ({
        id: plano.id,
        descricao: plano.descricao,
        cobertura: plano.cobertura,
        empresaNome: plano.empresa ? plano.empresa.nome : 'Empresa desconhecida'
      }));
    });
  }

  carregarDadosAssociacao(id: number): void {
    this.apiService.getAssociacaoById(id).subscribe((data) => {
      this.associacaoForm.patchValue({
        id: data.id,
        veiculoId: data.veiculoId,
        planoId: data.planoId
      });
    });
  }

  onSubmit(): void {
    if (this.associacaoForm.invalid) {
      return;
    }

    // Formulário de dados a serem enviados
    const formData = this.associacaoForm.value;

    if (this.associacaoId) {
      // Editar a associação existente
      this.apiService.editarVeiculoPlano(this.associacaoId, formData).subscribe({
        next: () => {
          console.log('Associação atualizada com sucesso!');
          this.router.navigate(['/gerenciar-veiculo-assistencia-plano']);
        },
        error: (error) => {
          console.error('Erro ao atualizar associação:', error);
        }
      });
    } else {
      // Criar nova associação (caso ainda não tenha associaçãoId)
      this.apiService.adicionarVeiculoPlano(formData).subscribe({
        next: () => {
          console.log('Associação criada com sucesso!');
          this.router.navigate(['/gerenciar-veiculo-assistencia-plano']);
        },
        error: (error) => {
          console.error('Erro ao adicionar associação:', error);
        }
      });
    }
  }
}


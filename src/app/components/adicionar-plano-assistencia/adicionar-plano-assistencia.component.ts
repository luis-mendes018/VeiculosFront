import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-adicionar-plano-assistencia',
  templateUrl: './adicionar-plano-assistencia.component.html',
  styleUrls: ['./adicionar-plano-assistencia.component.css']
})
export class AdicionarPlanoAssistenciaComponent {

  empresas: any[] = [];
  planoForm!: FormGroup;
  planoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute, // Para capturar parâmetros da URL
    private router: Router // Para redirecionamento após salvar
  ) {}

  ngOnInit(): void {
    this.planoForm = this.fb.group({
      descricao: ['', [Validators.required, Validators.maxLength(200)]],
      cobertura: ['', [Validators.required, Validators.maxLength(200)]],
      empresaId: ['', [Validators.required]]
    });

    this.carregarEmpresas();

    // Verifica se há um ID na URL (Edição)
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.planoId = +id;
        this.carregarPlano(this.planoId);
      }
    });
  }

  carregarEmpresas(): void {
    this.apiService.getTodasEmpresasAssistencia().subscribe(
      (response) => {
        this.empresas = response;
      },
      (error) => {
        console.error('Erro ao carregar empresas:', error);
      }
    );
  }

  carregarPlano(id: number): void {
    this.apiService.getPlanoAssistencia(id).subscribe(
      (plano) => {
        this.planoForm.patchValue({
          descricao: plano.descricao,
          cobertura: plano.cobertura,
          empresaId: plano.empresaId
        });
      },
      (error) => {
        console.error('Erro ao carregar o plano:', error);
      }
    );
  }

  onSubmit() {
    if (this.planoForm.invalid) {
      return;
    }

    const plano = {
      id: this.planoId ?? 0, // Certifique-se de que o ID está correto
      empresaId: this.planoForm.value.empresaId,
      descricao: this.planoForm.value.descricao,
      cobertura: this.planoForm.value.cobertura
    };

    console.log('Dados enviados para atualização:', plano);

    if (this.planoId) {
      // Atualizar plano
      this.apiService.editarPlanoAssistencia(this.planoId, plano).subscribe({
        next: () => {
          console.log('Plano atualizado com sucesso!');
          this.router.navigate(['/gerenciar-planos']); // Ajuste a rota conforme necessário
        },
        error: (error) => {
          console.error('Erro ao atualizar o plano:', error);
        }
      });

    } else {
      // Criar novo plano
      this.apiService.adicionarPlanoAssistencia(plano).subscribe({
        next: () => {
          console.log('Plano criado com sucesso!');
          this.router.navigate(['/gerenciar-planos']); // Ajuste a rota se necessário
        },
        error: (error) => {
          console.error('Erro ao criar o plano:', error);
        }
      });

    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-grupo',
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['./editar-grupo.component.css']
})
export class EditarGrupoComponent implements OnInit {
  grupoForm!: FormGroup;
  grupoId!: number;
  grupoData: any = {};

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.grupoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(200)]],
      descricao: ['', [Validators.required, Validators.maxLength(500)]]
    });

    // Obter o id do grupo da URL
    this.activatedRoute.params.subscribe((params) => {
      this.grupoId = params['id'];
      this.loadGrupoData();
    });
  }

  loadGrupoData(): void {
    this.apiService.getGrupoVeiculo(this.grupoId).subscribe(
      (response) => {
        this.grupoData = response;
        // Preencher o formulário com os dados do grupo
        this.grupoForm.patchValue({
          nome: this.grupoData.nome,
          descricao: this.grupoData.descricao
        });
      },
      (error) => {
        console.error('Erro ao carregar dados do grupo:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.grupoForm.invalid) {
      return;
    }

    const grupoEditado = {
      id: this.grupoId,  // Incluindo o id aqui
      nome: this.grupoForm.value.nome,
      descricao: this.grupoForm.value.descricao
    };

    //console.log('Dados enviados para a API:', grupoEditado);

    this.apiService.editarGrupoVeiculo(this.grupoId, grupoEditado).subscribe(
      () => {
        // Redirecionar para a página de gerenciamento de grupos
        this.router.navigate(['/gerenciar-grupos']);
      },
      (error) => {
        console.error('Erro ao editar grupo:', error);
      }
    );
  }

}

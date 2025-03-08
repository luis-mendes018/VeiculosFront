import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent {
  empresaForm!: FormGroup;
    empresaId!: number;
    empresaData: any = {};

    constructor(
      private fb: FormBuilder,
      private apiService: ApiService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) {}

    ngOnInit(): void {
      this.empresaForm = this.fb.group({
        nome: ['', [Validators.required, Validators.maxLength(200)]],
        endereco: ['', [Validators.required, Validators.maxLength(200)]]
      });

      // Obter o id do empresa da URL
      this.activatedRoute.params.subscribe((params) => {
        this.empresaId = params['id'];
        this.loadempresaData();
      });
    }

    loadempresaData(): void {
      this.apiService.getEmpresaAssistencia(this.empresaId).subscribe(
        (response) => {
          this.empresaData = response;
          // Preencher o formulário com os dados do empresa
          this.empresaForm.patchValue({
            nome: this.empresaData.nome,
            endereco: this.empresaData.endereco
          });
        },
        (error) => {
          console.error('Erro ao carregar dados do empresa:', error);
        }
      );
    }

    onSubmit(): void {
      if (this.empresaForm.invalid) {
        return;
      }

      const empresaEditada = {
        id: this.empresaId,  // Incluindo o id aqui
        nome: this.empresaForm.value.nome,
        endereco: this.empresaForm.value.endereco
      };

      //console.log('Dados enviados para a API:', empresaEditado);

      this.apiService.editarEmpresaAssistencia(this.empresaId, empresaEditada).subscribe(
        () => {
          // Redirecionar para a página de gerenciamento de grupos
          this.router.navigate(['/gerenciar-empresas']);
        },
        (error) => {
          console.error('Erro ao editar empresa:', error);
        }
      );
    }
}

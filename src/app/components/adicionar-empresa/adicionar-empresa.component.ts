import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-adicionar-empresa',
  templateUrl: './adicionar-empresa.component.html',
  styleUrls: ['./adicionar-empresa.component.css']
})
export class AdicionarEmpresaComponent implements OnInit {
  empresaForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.empresaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(200)]],
      endereco: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  onSubmit(): void {
    if (this.empresaForm.invalid) {
      return;
    }

    const novaEmpresa = this.empresaForm.value;

    this.apiService.adicionarEmpresaAssistencia(novaEmpresa).subscribe(() => {
      // Redireciona para a página de gerenciamento após adicionar
      this.router.navigate(['/gerenciar-empresas']);
    }, (error) => {
      console.error('Erro ao adicionar empresa:', error);
    });
  }
}


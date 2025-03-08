import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-grupo',
  templateUrl: './adicionar-grupo.component.html',
  styleUrls: ['./adicionar-grupo.component.css']
})
export class AdicionarGrupoComponent implements OnInit {
  grupoForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.grupoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(200)]],
      descricao: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  onSubmit(): void {
    if (this.grupoForm.invalid) {
      return;
    }

    const novoGrupo = this.grupoForm.value;

    this.apiService.adicionarGrupoVeiculo(novoGrupo).subscribe(() => {
      // Redireciona para a página de gerenciamento após adicionar
      this.router.navigate(['/gerenciar-grupos']);
    }, (error) => {
      console.error('Erro ao adicionar grupo:', error);
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-veiculo',
  templateUrl: './adicionar-veiculo.component.html',
  styleUrls: ['./adicionar-veiculo.component.css']
})
export class AdicionarVeiculoComponent implements OnInit {
  veiculoForm!: FormGroup;
  gruposVeiculos: any[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.veiculoForm = this.fb.group({
      modelo: ['', [Validators.required, Validators.maxLength(200)]],
      placa: ['', [Validators.required, Validators.maxLength(200)]],
      grupoId: [null, Validators.required],  // Defina o controle grupoId aqui
    });

    this.loadGruposVeiculos();
  }

  loadGruposVeiculos(): void {
    this.apiService.getGruposVeiculosSemPaginacao().subscribe(
      (response) => {
        console.log(response);
        this.gruposVeiculos = response;
      },
      (error) => {
        console.error('Erro ao carregar grupos de veículos:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.veiculoForm.invalid) {
      return;
    }

    const novoVeiculo = this.veiculoForm.value;
    //console.log('Dados do veículo:', novoVeiculo);

    this.apiService.adicionarVeiculo(novoVeiculo).subscribe(() => {
      // Redireciona para a página de gerenciamento após adicionar
      this.router.navigate(['/gerenciar-veiculos']);
    }, (error) => {
      console.error('Erro ao adicionar veículo:', error);
    });
  }
}

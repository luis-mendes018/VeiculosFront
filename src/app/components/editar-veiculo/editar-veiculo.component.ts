import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css']
})
export class EditarVeiculoComponent implements OnInit {
  veiculoForm!: FormGroup;
  gruposVeiculos: any[] = [];
  veiculoId!: number;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.veiculoId = +this.route.snapshot.paramMap.get('id')!; // Obtém o ID da URL
    this.veiculoForm = this.fb.group({
      modelo: ['', [Validators.required, Validators.maxLength(200)]],
      placa: ['', [Validators.required, Validators.maxLength(200)]],
      grupoId: [null, Validators.required],
    });

    this.loadGruposVeiculos();
    this.loadVeiculo();
  }

  loadGruposVeiculos(): void {
    this.apiService.getGruposVeiculosSemPaginacao().subscribe(
      (response) => {
        this.gruposVeiculos = response;
      },
      (error) => {
        console.error('Erro ao carregar grupos de veículos:', error);
      }
    );
  }

  loadVeiculo(): void {
    this.apiService.getVeiculo(this.veiculoId).subscribe(
      (response) => {
        this.veiculoForm.patchValue({
          modelo: response.modelo,
          placa: response.placa,
          grupoId: response.grupoId
        });
      },
      (error) => {
        console.error('Erro ao carregar veículo:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.veiculoForm.invalid) {
      return;
    }

    const veiculoEditado = {
      id: this.veiculoId, // Inclui o ID para edição
      modelo: this.veiculoForm.get('modelo')?.value,
      placa: this.veiculoForm.get('placa')?.value,
      grupoId: this.veiculoForm.get('grupoId')?.value,
    };

    this.apiService.editarVeiculo(this.veiculoId, veiculoEditado).subscribe(
      () => {
        this.router.navigate(['/gerenciar-veiculos']);
      },
      (error) => {
        console.error('Erro ao editar veículo:', error);
      }
    );
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarVeiculoAssistenciaPlanoComponent } from './adicionar-veiculo-assistencia-plano.component';

describe('AdicionarVeiculoAssistenciaPlanoComponent', () => {
  let component: AdicionarVeiculoAssistenciaPlanoComponent;
  let fixture: ComponentFixture<AdicionarVeiculoAssistenciaPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarVeiculoAssistenciaPlanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarVeiculoAssistenciaPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarVeiculoAssistenciaPlanoComponent } from './gerenciar-veiculo-assistencia-plano.component';

describe('GerenciarVeiculoAssistenciaPlanoComponent', () => {
  let component: GerenciarVeiculoAssistenciaPlanoComponent;
  let fixture: ComponentFixture<GerenciarVeiculoAssistenciaPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarVeiculoAssistenciaPlanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarVeiculoAssistenciaPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

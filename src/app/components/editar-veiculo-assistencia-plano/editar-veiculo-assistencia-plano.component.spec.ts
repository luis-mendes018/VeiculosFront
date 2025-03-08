import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVeiculoAssistenciaPlanoComponent } from './editar-veiculo-assistencia-plano.component';

describe('EditarVeiculoAssistenciaPlanoComponent', () => {
  let component: EditarVeiculoAssistenciaPlanoComponent;
  let fixture: ComponentFixture<EditarVeiculoAssistenciaPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVeiculoAssistenciaPlanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVeiculoAssistenciaPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

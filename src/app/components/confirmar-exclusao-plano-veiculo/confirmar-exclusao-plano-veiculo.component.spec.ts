import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarExclusaoPlanoVeiculoComponent } from './confirmar-exclusao-plano-veiculo.component';

describe('ConfirmarExclusaoPlanoVeiculoComponent', () => {
  let component: ConfirmarExclusaoPlanoVeiculoComponent;
  let fixture: ComponentFixture<ConfirmarExclusaoPlanoVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarExclusaoPlanoVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarExclusaoPlanoVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

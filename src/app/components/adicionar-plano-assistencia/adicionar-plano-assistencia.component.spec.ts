import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPlanoAssistenciaComponent } from './adicionar-plano-assistencia.component';

describe('AdicionarPlanoAssistenciaComponent', () => {
  let component: AdicionarPlanoAssistenciaComponent;
  let fixture: ComponentFixture<AdicionarPlanoAssistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarPlanoAssistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarPlanoAssistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlanoAssistenciaComponent } from './editar-plano-assistencia.component';

describe('EditarPlanoAssistenciaComponent', () => {
  let component: EditarPlanoAssistenciaComponent;
  let fixture: ComponentFixture<EditarPlanoAssistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPlanoAssistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPlanoAssistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

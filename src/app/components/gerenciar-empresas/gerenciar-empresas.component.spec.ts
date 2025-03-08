import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarEmpresasComponent } from './gerenciar-empresas.component';

describe('GerenciarEmpresasComponent', () => {
  let component: GerenciarEmpresasComponent;
  let fixture: ComponentFixture<GerenciarEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

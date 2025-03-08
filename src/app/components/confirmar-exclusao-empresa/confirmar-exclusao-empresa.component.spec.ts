import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarExclusaoEmpresaComponent } from './confirmar-exclusao-empresa.component';

describe('ConfirmarExclusaoEmpresaComponent', () => {
  let component: ConfirmarExclusaoEmpresaComponent;
  let fixture: ComponentFixture<ConfirmarExclusaoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarExclusaoEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarExclusaoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

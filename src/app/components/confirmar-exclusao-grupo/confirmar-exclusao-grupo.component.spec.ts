import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarExclusaoGrupoComponent } from './confirmar-exclusao-grupo.component';

describe('ConfirmarExclusaoGrupoComponent', () => {
  let component: ConfirmarExclusaoGrupoComponent;
  let fixture: ComponentFixture<ConfirmarExclusaoGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarExclusaoGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarExclusaoGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarGruposComponent } from './gerenciar-grupos.component';

describe('GerenciarGruposComponent', () => {
  let component: GerenciarGruposComponent;
  let fixture: ComponentFixture<GerenciarGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarGruposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarGrupoComponent } from './adicionar-grupo.component';

describe('AdicionarGrupoComponent', () => {
  let component: AdicionarGrupoComponent;
  let fixture: ComponentFixture<AdicionarGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

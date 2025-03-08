import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarExclusaoPlanoComponent } from './confirmar-exclusao-plano.component';

describe('ConfirmarExclusaoPlanoComponent', () => {
  let component: ConfirmarExclusaoPlanoComponent;
  let fixture: ComponentFixture<ConfirmarExclusaoPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarExclusaoPlanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarExclusaoPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

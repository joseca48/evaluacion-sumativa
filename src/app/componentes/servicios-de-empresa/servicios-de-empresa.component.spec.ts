import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDeEmpresaComponent } from './servicios-de-empresa.component';

describe('ServiciosDeEmpresaComponent', () => {
  let component: ServiciosDeEmpresaComponent;
  let fixture: ComponentFixture<ServiciosDeEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiciosDeEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosDeEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDireccionesAppComponent } from './mostrar-direcciones-app.component';

describe('MostrarDireccionesAppComponent', () => {
  let component: MostrarDireccionesAppComponent;
  let fixture: ComponentFixture<MostrarDireccionesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDireccionesAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDireccionesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

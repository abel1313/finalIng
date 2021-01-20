import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDireccionAppComponent } from './agregar-direccion-app.component';

describe('AgregarDireccionAppComponent', () => {
  let component: AgregarDireccionAppComponent;
  let fixture: ComponentFixture<AgregarDireccionAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDireccionAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDireccionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

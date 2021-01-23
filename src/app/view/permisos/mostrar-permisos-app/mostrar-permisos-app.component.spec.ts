import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPermisosAppComponent } from './mostrar-permisos-app.component';

describe('MostrarPermisosAppComponent', () => {
  let component: MostrarPermisosAppComponent;
  let fixture: ComponentFixture<MostrarPermisosAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPermisosAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPermisosAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

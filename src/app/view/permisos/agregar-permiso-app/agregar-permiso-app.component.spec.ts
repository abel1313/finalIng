import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPermisoAppComponent } from './agregar-permiso-app.component';

describe('AgregarPermisoAppComponent', () => {
  let component: AgregarPermisoAppComponent;
  let fixture: ComponentFixture<AgregarPermisoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPermisoAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPermisoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

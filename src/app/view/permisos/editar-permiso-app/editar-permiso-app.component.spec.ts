import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPermisoAppComponent } from './editar-permiso-app.component';

describe('EditarPermisoAppComponent', () => {
  let component: EditarPermisoAppComponent;
  let fixture: ComponentFixture<EditarPermisoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPermisoAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPermisoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

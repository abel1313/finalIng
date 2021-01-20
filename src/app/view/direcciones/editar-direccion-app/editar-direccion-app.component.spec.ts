import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDireccionAppComponent } from './editar-direccion-app.component';

describe('EditarDireccionAppComponent', () => {
  let component: EditarDireccionAppComponent;
  let fixture: ComponentFixture<EditarDireccionAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDireccionAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDireccionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

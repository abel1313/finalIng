import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonaAppComponent } from './editar-persona-app.component';

describe('EditarPersonaAppComponent', () => {
  let component: EditarPersonaAppComponent;
  let fixture: ComponentFixture<EditarPersonaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPersonaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPersonaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPersonaAppComponent } from './agregar-persona-app.component';

describe('AgregarPersonaAppComponent', () => {
  let component: AgregarPersonaAppComponent;
  let fixture: ComponentFixture<AgregarPersonaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPersonaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPersonaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

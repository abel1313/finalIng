import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPersonaAppComponent } from './mostrar-persona-app.component';

describe('MostrarPersonaAppComponent', () => {
  let component: MostrarPersonaAppComponent;
  let fixture: ComponentFixture<MostrarPersonaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPersonaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPersonaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioClinicoComponent } from './horario-clinico.component';

describe('HorarioClinicoComponent', () => {
  let component: HorarioClinicoComponent;
  let fixture: ComponentFixture<HorarioClinicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioClinicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

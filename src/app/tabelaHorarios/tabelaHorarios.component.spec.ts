import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaHorariosComponent } from './tabelaHorarios.component';

describe('TabelaHorariosComponent', () => {
  let component: TabelaHorariosComponent;
  let fixture: ComponentFixture<TabelaHorariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaHorariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

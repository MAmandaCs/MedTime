import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPostoComponent } from './dados-posto.component';

describe('DadosPostoComponent', () => {
  let component: DadosPostoComponent;
  let fixture: ComponentFixture<DadosPostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosPostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

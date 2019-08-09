import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncaminhamentoComponent } from './encaminhamento.component';

describe('EncaminhamentoComponent', () => {
  let component: EncaminhamentoComponent;
  let fixture: ComponentFixture<EncaminhamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncaminhamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncaminhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

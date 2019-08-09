import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistaComponent } from './dentista.component';

describe('DentistaComponent', () => {
  let component: DentistaComponent;
  let fixture: ComponentFixture<DentistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

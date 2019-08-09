import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPostoComponent } from './perfil-posto.component';

describe('PerfilPostoComponent', () => {
  let component: PerfilPostoComponent;
  let fixture: ComponentFixture<PerfilPostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesvioVarianciaComponent } from './desvio-variancia.component';

describe('DesvioVarianciaComponent', () => {
  let component: DesvioVarianciaComponent;
  let fixture: ComponentFixture<DesvioVarianciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesvioVarianciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesvioVarianciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

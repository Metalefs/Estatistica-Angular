import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesvioPadraoComponent } from './desvio-padrao.component';

describe('DesvioPadraoComponent', () => {
  let component: DesvioPadraoComponent;
  let fixture: ComponentFixture<DesvioPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesvioPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesvioPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

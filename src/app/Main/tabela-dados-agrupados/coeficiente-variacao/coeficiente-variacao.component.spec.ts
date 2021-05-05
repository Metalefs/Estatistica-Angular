import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeficienteVariacaoComponent } from './coeficiente-variacao.component';

describe('CoeficienteVariacaoComponent', () => {
  let component: CoeficienteVariacaoComponent;
  let fixture: ComponentFixture<CoeficienteVariacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoeficienteVariacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoeficienteVariacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

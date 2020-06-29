import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDadosAgrupadosComponent } from './tabela-dados-agrupados.component';

describe('TabelaDadosAgrupadosComponent', () => {
  let component: TabelaDadosAgrupadosComponent;
  let fixture: ComponentFixture<TabelaDadosAgrupadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaDadosAgrupadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDadosAgrupadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

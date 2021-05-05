import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDistrbuicaoComponent } from './tabela-distrbuicao.component';

describe('TabelaDistrbuicaoComponent', () => {
  let component: TabelaDistrbuicaoComponent;
  let fixture: ComponentFixture<TabelaDistrbuicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaDistrbuicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDistrbuicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinacaoComponent } from './combinacao.component';

describe('CombinacaoComponent', () => {
  let component: CombinacaoComponent;
  let fixture: ComponentFixture<CombinacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarianciaComponent } from './variancia.component';

describe('VarianciaComponent', () => {
  let component: VarianciaComponent;
  let fixture: ComponentFixture<VarianciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarianciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarianciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArranjoComponent } from './arranjo.component';

describe('ArranjoComponent', () => {
  let component: ArranjoComponent;
  let fixture: ComponentFixture<ArranjoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArranjoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArranjoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

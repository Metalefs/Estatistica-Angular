import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatorialComponent } from './fatorial.component';

describe('FatorialComponent', () => {
  let component: FatorialComponent;
  let fixture: ComponentFixture<FatorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

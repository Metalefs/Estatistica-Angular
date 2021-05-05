import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedianaComponent } from './mediana.component';

describe('MedianaComponent', () => {
  let component: MedianaComponent;
  let fixture: ComponentFixture<MedianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

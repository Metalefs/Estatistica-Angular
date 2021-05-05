import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramasComponent } from './anagramas.component';

describe('AnagramasComponent', () => {
  let component: AnagramasComponent;
  let fixture: ComponentFixture<AnagramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

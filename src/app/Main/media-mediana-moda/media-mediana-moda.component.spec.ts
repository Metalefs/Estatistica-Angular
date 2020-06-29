import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMedianaModaComponent } from './media-mediana-moda.component';

describe('MediaMedianaModaComponent', () => {
  let component: MediaMedianaModaComponent;
  let fixture: ComponentFixture<MediaMedianaModaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaMedianaModaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaMedianaModaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

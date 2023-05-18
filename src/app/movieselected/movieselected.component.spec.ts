import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieselectedComponent } from './movieselected.component';

describe('MovieselectedComponent', () => {
  let component: MovieselectedComponent;
  let fixture: ComponentFixture<MovieselectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieselectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieselectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymovieorderComponent } from './displaymovieorder.component';

describe('DisplaymovieorderComponent', () => {
  let component: DisplaymovieorderComponent;
  let fixture: ComponentFixture<DisplaymovieorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaymovieorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymovieorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

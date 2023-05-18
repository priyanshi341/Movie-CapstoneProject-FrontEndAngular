import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaylistofordersforadminnComponent } from './displaylistofordersforadminn.component';

describe('DisplaylistofordersforadminnComponent', () => {
  let component: DisplaylistofordersforadminnComponent;
  let fixture: ComponentFixture<DisplaylistofordersforadminnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaylistofordersforadminnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaylistofordersforadminnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallforadminComponent } from './viewallforadmin.component';

describe('ViewallforadminComponent', () => {
  let component: ViewallforadminComponent;
  let fixture: ComponentFixture<ViewallforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallforadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

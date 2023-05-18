import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedcategoryComponent } from './selectedcategory.component';

describe('SelectedcategoryComponent', () => {
  let component: SelectedcategoryComponent;
  let fixture: ComponentFixture<SelectedcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

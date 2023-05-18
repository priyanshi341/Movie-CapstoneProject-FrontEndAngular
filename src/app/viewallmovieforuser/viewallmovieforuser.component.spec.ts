import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallmovieforuserComponent } from './viewallmovieforuser.component';

describe('ViewallmovieforuserComponent', () => {
  let component: ViewallmovieforuserComponent;
  let fixture: ComponentFixture<ViewallmovieforuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallmovieforuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallmovieforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

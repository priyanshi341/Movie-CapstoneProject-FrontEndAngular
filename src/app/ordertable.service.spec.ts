import { TestBed } from '@angular/core/testing';

import { OrdertableService } from './ordertable.service';

describe('OrdertableService', () => {
  let service: OrdertableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdertableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

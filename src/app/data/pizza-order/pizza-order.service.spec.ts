import { TestBed } from '@angular/core/testing';

import { PizzaOrderService } from './pizza-order.service';

describe('PizzaOrderService', () => {
  let service: PizzaOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

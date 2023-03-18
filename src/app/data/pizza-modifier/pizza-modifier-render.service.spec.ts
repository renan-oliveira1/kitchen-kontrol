import { TestBed } from '@angular/core/testing';

import { PizzaModifierRenderService } from './pizza-modifier-render.service';

describe('PizzaModifierRenderService', () => {
  let service: PizzaModifierRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaModifierRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

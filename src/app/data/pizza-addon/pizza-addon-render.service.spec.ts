import { TestBed } from '@angular/core/testing';

import { PizzaAddonRenderService } from './pizza-addon-render.service';

describe('PizzaAddonRenderService', () => {
  let service: PizzaAddonRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaAddonRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

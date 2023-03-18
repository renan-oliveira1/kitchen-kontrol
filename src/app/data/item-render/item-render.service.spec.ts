import { TestBed } from '@angular/core/testing';

import { ItemRenderService } from './item-render.service';

describe('ItemRenderService', () => {
  let service: ItemRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

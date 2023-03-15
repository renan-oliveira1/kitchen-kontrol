import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRenderComponent } from './item-render.component';

describe('ItemRenderComponent', () => {
  let component: ItemRenderComponent;
  let fixture: ComponentFixture<ItemRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

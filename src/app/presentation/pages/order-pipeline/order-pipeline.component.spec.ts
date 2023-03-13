import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPipelineComponent } from './order-pipeline.component';

describe('OrderPipelineComponent', () => {
  let component: OrderPipelineComponent;
  let fixture: ComponentFixture<OrderPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPipelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

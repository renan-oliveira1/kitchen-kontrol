import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterComponent } from './waiter.component';

describe('WaiterComponent', () => {
  let component: WaiterComponent;
  let fixture: ComponentFixture<WaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredDialogComponent } from './delivered-dialog.component';

describe('DeliveredDialogComponent', () => {
  let component: DeliveredDialogComponent;
  let fixture: ComponentFixture<DeliveredDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveredDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveredDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

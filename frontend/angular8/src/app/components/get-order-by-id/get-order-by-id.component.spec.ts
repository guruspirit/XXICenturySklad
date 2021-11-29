import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderByIdComponent } from './get-order-by-id.component';

describe('GetOrderByIdComponent', () => {
  let component: GetOrderByIdComponent;
  let fixture: ComponentFixture<GetOrderByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOrderByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOrderByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

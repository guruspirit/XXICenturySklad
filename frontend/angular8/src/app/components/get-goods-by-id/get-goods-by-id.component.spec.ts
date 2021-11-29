import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGoodsByIdComponent } from './get-goods-by-id.component';

describe('GetGoodsByIdComponent', () => {
  let component: GetGoodsByIdComponent;
  let fixture: ComponentFixture<GetGoodsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGoodsByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGoodsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

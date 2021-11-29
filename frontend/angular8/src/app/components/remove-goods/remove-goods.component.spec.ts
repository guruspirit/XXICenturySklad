import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveGoodsComponent } from './remove-goods.component';

describe('RemoveGoodsComponent', () => {
  let component: RemoveGoodsComponent;
  let fixture: ComponentFixture<RemoveGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

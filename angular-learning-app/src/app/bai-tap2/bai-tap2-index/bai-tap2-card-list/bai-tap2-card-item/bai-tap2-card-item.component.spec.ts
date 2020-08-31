import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2CardItemComponent } from './bai-tap2-card-item.component';

describe('BaiTap2CardItemComponent', () => {
  let component: BaiTap2CardItemComponent;
  let fixture: ComponentFixture<BaiTap2CardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2CardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2CardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

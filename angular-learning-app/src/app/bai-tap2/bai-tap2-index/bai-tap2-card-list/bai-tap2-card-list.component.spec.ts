import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2CardListComponent } from './bai-tap2-card-list.component';

describe('BaiTap2CardListComponent', () => {
  let component: BaiTap2CardListComponent;
  let fixture: ComponentFixture<BaiTap2CardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2CardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

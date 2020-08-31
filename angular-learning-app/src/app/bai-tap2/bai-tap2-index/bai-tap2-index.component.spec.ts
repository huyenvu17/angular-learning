import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2IndexComponent } from './bai-tap2-index.component';

describe('BaiTap2IndexComponent', () => {
  let component: BaiTap2IndexComponent;
  let fixture: ComponentFixture<BaiTap2IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2IndexcontentComponent } from './bai-tap2-indexcontent.component';

describe('BaiTap2IndexcontentComponent', () => {
  let component: BaiTap2IndexcontentComponent;
  let fixture: ComponentFixture<BaiTap2IndexcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2IndexcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2IndexcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

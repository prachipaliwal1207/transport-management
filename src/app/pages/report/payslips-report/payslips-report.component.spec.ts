import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipsReportComponent } from './payslips-report.component';

describe('PayslipsReportComponent', () => {
  let component: PayslipsReportComponent;
  let fixture: ComponentFixture<PayslipsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayslipsReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayslipsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

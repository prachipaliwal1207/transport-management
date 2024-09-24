import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParclesReportComponent } from './parcles-report.component';

describe('ParclesReportComponent', () => {
  let component: ParclesReportComponent;
  let fixture: ComponentFixture<ParclesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParclesReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParclesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

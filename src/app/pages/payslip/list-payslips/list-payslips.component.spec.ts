import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPayslipsComponent } from './list-payslips.component';

describe('ListPayslipsComponent', () => {
  let component: ListPayslipsComponent;
  let fixture: ComponentFixture<ListPayslipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPayslipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPayslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

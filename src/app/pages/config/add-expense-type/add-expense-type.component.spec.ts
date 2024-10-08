import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseTypeComponent } from './add-expense-type.component';

describe('AddExpenseTypeComponent', () => {
  let component: AddExpenseTypeComponent;
  let fixture: ComponentFixture<AddExpenseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddExpenseTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddExpenseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

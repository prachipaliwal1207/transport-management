import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpenseTypeComponent } from './list-expense-type.component';

describe('ListExpenseTypeComponent', () => {
  let component: ListExpenseTypeComponent;
  let fixture: ComponentFixture<ListExpenseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListExpenseTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListExpenseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

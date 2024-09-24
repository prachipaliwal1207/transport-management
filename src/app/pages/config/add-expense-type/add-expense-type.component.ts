import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-expense-type',
  templateUrl: './add-expense-type.component.html',
  styleUrl: './add-expense-type.component.scss'
})
export class  AddExpenseTypeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }

  form: any = {
    name: "",
    icon: "abc.png",
    active: 1
  }

  active: boolean = true;
  data: any = ''
  id=0;
  parseData: any = ''
  updateAlert: boolean = false;
  successAlert: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      console.log(param.id)
      if (param.id) {
        this.apiService.getExpenseTypeAgency(0, param.id).subscribe((res: any) => {
          this.form = res.data[0];
          this.id = param.id
        })
      }
    })
  }

  addPayment(addPaymentForm: any) {
    if (!this.id) {
      this.apiService.addExpenseType(this.form).subscribe(
        (res) => {
          console.log(res)
          this.successAlert = true;
          setTimeout(() => {
            this.successAlert = false;
            this.router.navigate(['/list-expenseType']);
          }, 2000);
        },
        (error) => {
          console.error("Error adding  expenseType:", error);
        }
      );
    } else {
      this.apiService.updateExpenseType(this.form, this.id).subscribe(
        (res: any) => {
          if (res.message === "Data updated successfully") {
            this.updateAlert = true;
            setTimeout(() => {
              this.updateAlert = false;
              this.router.navigate(['/list-expenseType']);
              this.resetForm();
            }, 2000);
          }
        },
        (error) => {
          console.error("Error updating expenseType:", error);
        }
      );
    }
  }
  resetForm() {
    this.form = {
      name: "",
      icon: "",
      active: 1
    };
    this.id = 0;
  }
}

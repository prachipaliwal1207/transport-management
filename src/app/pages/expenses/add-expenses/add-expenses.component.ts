import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrl: './add-expenses.component.scss'
})
export class AddExpensesComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }


  date: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  form: any = {
    vehicleId: "",
    expenceType: "",
    dateAdded: "",
    amount: "",
    agencyId: "",
    userId: 1,
    active: 1
  }

  active: boolean = true;
  data: any = ''
  id = 0;
  parseData: any = ''
  dataSource: any = ''
  vehicleTypeId:any = ''
  updateAlert: boolean = false;
  successAlert: boolean = false;
  expenceTypeId:any = ''

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.form.dateAdded = today;
    this.data = localStorage.getItem("user")
    this.parseData = JSON.parse(this.data);
    this.form.agencyId = this.parseData.agencyId ?? 1;
    this.form.userId = this.parseData?.id ?? 1; 
    this.form.expenceType = this.expenceTypeId;
    this.route.params.subscribe((param: any) => {
      // console.log(param.id)
      if (param.id) {
        this.apiService.getExpensesAgency(0, param.id).subscribe((res: any) => {
          this.form = res.data[0];
          this.id = param.id
        })
      }
    })
    this.expenseType();
    this.vehicleType();
  }

  expenseType() {
    this.apiService.getExpenseType().subscribe((res: any) => {
      this.expenceTypeId = res.data;
    });
  }

  vehicleType(){
    this.apiService.getVehicles().subscribe((res: any) => {
      this.vehicleTypeId = res.data;
    });
  }

  addExpenses(addExpensesForm: any) {
    if (!this.id) {
      this.apiService.addExpenses(this.form).subscribe(
        (res) => {
          console.log(res)
          this.successAlert = true;
          setTimeout(() => {
            this.successAlert = false;
            this.router.navigate(['/list-expenses']);
          }, 2000);
        },
        (error) => {
          console.error("Error adding expense:", error);
        }
      );
    } else {
      this.apiService.updateExpenses(this.form, this.id).subscribe(
        (res: any) => {
          if (res.message === "Data updated successfully") {
            this.updateAlert = true;
            setTimeout(() => {
              this.updateAlert = false;
              this.router.navigate(['/list-expenses']);
              this.resetForm();
            }, 2000);
          }
        },
        (error) => {
          console.error("Error updating expense:", error);
        }
      );
    }
  }
  resetForm() {
    this.form = {
      vehicleId: "",
      expenceType: "",
      dateAdded: "",
      amount: "",
      agencyId: this.parseData.agencyId ?? 1,
      active: 1
    };
    this.id = 0;
  }
}



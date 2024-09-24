import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrl: './add-salary.component.scss'
})

export class AddSalaryComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }


  date: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  form: any = {
    payslipId: "",
    staffId: "",
    dayPresent: "",
    bonus: "",
    advance: "",
    // kharchi: "",
    finalAmount: "",
    userId: "",
    active: ""
  }

  active: boolean = true;
  data: any = ''
  id = 0;
  parseData: any = ''
  updateAlert: boolean = false;
  successAlert: boolean = false;
  dataSource: any = ''
  staffTypeId: any = ''
  payslipTypeId: any = ''

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.form.dayPresent = today;
    this.getParseData();
    this.route.params.subscribe((param: any) => {
      // console.log(param.id)
      if (param.id) {
        this.apiService.getPaymentAgency(0, param.id).subscribe((res: any) => {
          this.form = res.data[0];
          this.id = param.id
        })
      }
    })
    this.staffData();
    this.payslipData();
  }

  getParseData() {
    this.data = localStorage.getItem("user")
    this.parseData = JSON.parse(this.data);
    this.form.userId = this.parseData.userId;
  }

  staffData() {
    this.apiService.getStaff().subscribe((res: any) => {
      this.staffTypeId = res.data;
      // console.log(this.clientTypeId)
    })
  }

  payslipData() {
    this.apiService.getPayslips().subscribe((res: any) => {
      this.payslipTypeId = res.data;
      // console.log(this.clientTypeId)
    })
  }

  addSalary(addSalaryForm: any) {
    if (!this.id) {
      this.apiService.addPayment(this.form).subscribe(
        (res) => {
          console.log(res)
          this.successAlert = true;
          setTimeout(() => {
            this.successAlert = false;
            this.router.navigate(['/list-salary']);
          }, 2000);
        },
        (error) => {
          console.error("Error adding salary", error);
        }
      );
    } else {
      this.apiService.updatePayment(this.form, this.id).subscribe(
        (res: any) => {
          if (res.message === "Data updated successfully") {
            this.updateAlert = true;
            setTimeout(() => {
              this.updateAlert = false;
              this.router.navigate(['/list-salary']);
              this.resetForm();
            }, 2000);
          }
        },
        (error) => {
          console.error("Error updating salary:", error);
        }
      );
    }
  }
  resetForm() {
    this.form = {
      payslipId: "",
      staffId: "",
      dayPresent: "",
      bonus: "",
      advance: "",
      // kharchi: "",
      finalAmount: "",
      userId: "",
      active: 1
    };
    this.id = 0;
  }

}

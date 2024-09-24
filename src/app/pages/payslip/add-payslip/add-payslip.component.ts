import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-payslip',
  templateUrl: './add-payslip.component.html',
  styleUrl: './add-payslip.component.scss'
})
export class AddPayslipComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }


  date: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  form: any = {
    fromDate: "",
    toDate: "",
    active: 1
  }

  active: boolean = true;
  data: any = ''
  id = 0;
  parseData: any = ''
  updateAlert: boolean = false;
  successAlert: boolean = false;
  dataSource: any = ''
  clientTypeId: any = ''

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.form.fromDate = today;
    this.form.toDate = today;
    this.route.params.subscribe((param: any) => {
      // console.log(param.id)
      if (param.id) {
        this.apiService.getPayslipsAgency(0, param.id).subscribe((res: any) => {
          this.form = res.data[0];
          this.id = param.id
        })
      }
    })
  }

  addPayslip(addPayslipForm: any) {
    if (!this.id) {
      this.apiService.addPayslips(this.form).subscribe(
        (res) => {
          console.log(res)
          this.successAlert = true;
          setTimeout(() => {
            this.successAlert = false;
            this.router.navigate(['/list-payslip']);
          }, 2000);
        },
        (error) => {
          console.error("Error adding payslip:", error);
        }
      );
    } else {
      this.apiService.updatePayslips(this.form, this.id).subscribe(
        (res: any) => {
          if (res.message === "Data updated successfully") {
            this.updateAlert = true;
            setTimeout(() => {
              this.updateAlert = false;
              this.router.navigate(['/list-payslip']);
              this.resetForm();
            }, 2000);
          }
        },
        (error) => {
          console.error("Error updating payslip:", error);
        }
      );
    }
  }
  resetForm() {
    this.form = {
      fromDate: "",
      toDate: "",
      active: 1
    };
    this.id = 0;
  }

}

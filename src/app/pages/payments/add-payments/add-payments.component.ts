import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-payments',
  templateUrl: './add-payments.component.html',
  styleUrl: './add-payments.component.scss'
})
export class AddPaymentsComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }

  form: any = {
    clientId: "",
    dateTime: "",
    amount: "",
    paymentMethod: "",
    note: "",
    userId: "",
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
    this.form.dateTime = today;
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
    this.clientData();
  }

  getParseData(){
    this.data = localStorage.getItem("user")
    this.parseData = JSON.parse(this.data);
    this.form.agencyId = this.parseData.agencyId ?? 1;
    this.form.userId = this.parseData.userId;
  }

  clientData() {
    this.apiService.getClient().subscribe((res: any) => {
      this.clientTypeId = res.data;
      // console.log(this.clientTypeId)
    })
  }

  addPayment(addPaymentForm: any) {
    if (!this.id) {
      this.apiService.addPayment(this.form).subscribe(
        (res) => {
          console.log(res)
          this.successAlert = true;
          setTimeout(() => {
            this.successAlert = false;
            this.router.navigate(['/list-payment']);
          }, 2000);
        },
        (error) => {
          console.error("Error adding payment:", error);
        }
      );
    } else {
      this.apiService.updatePayment(this.form, this.id).subscribe(
        (res: any) => {
          if (res.message === "Data updated successfully") {
            this.updateAlert = true;
            setTimeout(() => {
              this.updateAlert = false;
              this.router.navigate(['/list-payment']);
              this.resetForm();
            }, 2000);
          }
        },
        (error) => {
          console.error("Error updating payment:", error);
        }
      );
    }
  }
  resetForm() {
    this.form = {
      clientId: "",
      dateTime: "",
      amount: "",
      paymentMethod: "",
      note: "",
      agencyId: this.parseData.agencyId ?? 1,
      active: 1
    };
    this.id = 0;
  }
}

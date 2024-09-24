import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrl: './add-clients.component.scss'
})
export class AddClientsComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }


  date: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  form: any = {
    name: "",
    address: "",
    gstin: "",
    pincode: "",
    city: "",
    state: "",
    mobile: "",
    mobile2: "",
    email: "",
    agencyId: "",
    active: 1
  }
  active: boolean = true;
  id = 0;
  remark: any = '';
  agencyId: any = ''
  data: any = ''
  parseData: any = ''
  updateAlert: boolean = false;
  successAlert: boolean = false;


  ngOnInit(): void {
    this.data = localStorage.getItem("user")
    this.parseData = JSON.parse(this.data);
    this.form.agencyId = this.parseData.agencyId ?? 1;
    this.route.params.subscribe((param: any) => {
      // console.log(param.id)
      if(param.id){
        this.apiService.getClientAgency(0, param.id).subscribe((res: any) => {
          this.form = res.data[0];
          this.id = param.id
        })
      }
    })
  }



  addClient(clientForm: any) {
    if(!this.id){
      this.apiService.addClient(this.form).subscribe(
        (res) => {
          this.successAlert = true;
          setTimeout(() => {
            this.successAlert = false;
            this.router.navigate(['/list-clients']);
            this.resetForm();
          }, 2000);
        },
        (error) => {
          console.error("Error adding client:", error);
        }
      );
    }else{
           this.apiService.updateClient(this.form, this.id).subscribe(
        (res: any) => {
          if (res.message === "Data updated successfully") {
            this.updateAlert = true;
            setTimeout(() => {
              this.updateAlert = false;
              this.router.navigate(['/list-clients']);
              this.resetForm();
            }, 2000);
          }
        },
        (error) => {
          console.error("Error updating client:", error);
        }
      );
    }
  }
  resetForm() {
    this.form = {
      name: "",
      address: "",
      gstin: "",
      pincode: "",
      city: "",
      state: "",
      mobile: "",
      mobile2: "",
      email: "",
      agencyId: this.parseData.agencyId ?? 1,
      active: 1
    };
    this.id = 0;
  }
}
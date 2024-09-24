import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }


  date: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  form: any = {
    name: "",
    username: "",
    password: "",
    mobileno: "",
    pincode: "",
    agencyId:"",
    active:1
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
    this.getParseData();
    this.route.params.subscribe((param: any) => {
      // console.log(param.id)
      if (param.id) {
        this.apiService.getUsersAgency(0, param.id).subscribe((res: any) => {
          this.form = res.data[0];
          this.id = param.id
        })
      }
    })
  }

  getParseData() {
    this.data = localStorage.getItem("user")
    this.parseData = JSON.parse(this.data);
    this.form.agencyId = this.parseData.agencyId ?? 1;
  }

  addUser(addUserForm: any) {
    console.log('Form Data:', this.form);
    console.log('User ID:', this.id);
  
    if (!this.id) {
      this.apiService.addUsers(this.form).subscribe(
        (res) => {
          console.log('Response:', res);
          if (res) {
            this.successAlert = true;
            setTimeout(() => {
              this.successAlert = false;
              this.router.navigate(['/list-user']);
            }, 2000);
          } else {
            console.error('Error in response:', res);
          }
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    } else {
      this.apiService.updateUsers(this.form, this.id).subscribe(
        (res: any) => {
          if (res.message === "Data updated successfully") {
            this.updateAlert = true;
            setTimeout(() => {
              this.updateAlert = false;
              this.router.navigate(['/list-user']);
              this.resetForm();
            }, 2000);
          } else {
            console.error('Error in response:', res);
          }
        },
        (error) => {
          console.error('Error updating user:', error);
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
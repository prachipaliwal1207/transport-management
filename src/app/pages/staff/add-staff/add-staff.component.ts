import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss'
})

export class AddStaffComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }


  date: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  form: any = {
    type: "",
    fname: "",
    sname: "",
    dob: "",
    doj: "",
    monthlySalary: "",
    dlno: "",
    dlphoto: "",
    dlexpiry: "",
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
    this.route.params.subscribe((param: any) => {
      // console.log(param.id)
      if (param.id) {
        this.apiService.getStaffAgency(0, param.id).subscribe((res: any) => {
          this.form = res.data[0];
          this.id = param.id
        })
      }
    })
  }

  addStaff(addStaffForm: any) {
    if (!this.id) {
      this.apiService.addStaff(this.form).subscribe(
        (res) => {
          console.log(res)
          this.successAlert = true;
          setTimeout(() => {
            this.successAlert = false;
            this.router.navigate(['/list-staff']);
          }, 2000);
        },
        (error) => {
          console.error("Error adding staff:", error);
        }
      );
    } else {
      this.apiService.updateStaff(this.form, this.id).subscribe(
        (res: any) => {
          if (res.message === "Data updated successfully") {
            this.updateAlert = true;
            setTimeout(() => {
              this.updateAlert = false;
              this.router.navigate(['/list-staff']);
              this.resetForm();
            }, 2000);
          }
        },
        (error) => {
          console.error("Error updating staff:", error);
        }
      );
    }
  }
  resetForm() {
    this.form = {
      type: "",
      fname: "",
      sname: "",
      dob: "",
      doj: "",
      monthlySalary: "",
      dlno: "",
      dlphoto: "",
      dlexpiry: "",
      active: 1
    };
    this.id = 0;
  }

}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.scss'
})
export class AddVehicleComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }


  date: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  form: any = {
    vehicleName: "",
    vehicleType: "",
    vehicleNo: "",
    insuranceNo: "",
    insurancePhoto: "",
    insuranceExpiry: "",
    pucNo: "",
    pucPhoto: "",
    pucExpiry: "",
    rcExpiry: "",
    active: 1
  }

  active: boolean = true;
  id = 0;
  agencyId: any = ''
  data: any = ''
  parseData: any = ''
  updateAlert: boolean = false;
  successAlert: boolean = false;
  pucPhotoError: boolean = false;
  insurancePhotoError: boolean = false;
  selectedFiles: { [key: string]: File | null } = {};

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.form.insuranceExpiry = today;
    this.form.pucExpiry = today;
    this.form.rcExpiry = today;
    this.route.params.subscribe((param: any) => {
      if (param.id) {
        this.apiService.getVehiclesAgency(0, param.id).subscribe((res: any) => {
          this.form = res.data[0];
          this.id = param.id
        })
      }
    })
  }

  onFileChange(event: Event, fieldName: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles[fieldName] = input.files[0];
    } else {
      this.selectedFiles[fieldName] = null;
    }
  }


  addVehicle(form:any) {
    const formData: FormData = new FormData();
    formData.append('vehicleName', this.form.vehicleName);
    formData.append('vehicleType', this.form.vehicleType);
    formData.append('vehicleNo', this.form.vehicleNo);
    formData.append('insuranceNo', this.form.insuranceNo);
    formData.append('insuranceExpiry', this.form.insuranceExpiry);
    formData.append('pucNo', this.form.pucNo);
    formData.append('pucExpiry', this.form.pucExpiry);
    formData.append('rcExpiry', this.form.rcExpiry);
    formData.append('active', this.form.active.toString());

    if (this.selectedFiles['insurancePhoto']) {
      formData.append('insurancePhoto', this.selectedFiles['insurancePhoto']);
    }
    if (this.selectedFiles['pucPhoto']) {
      formData.append('pucPhoto', this.selectedFiles['pucPhoto']);
    }

    if (this.id === 0) {
      this.apiService.addVehicles(formData).subscribe(
        () => {
          this.successAlert = true;
          setTimeout(() => {
            this.successAlert = false;
            this.router.navigate(['/list-vehicles']);
          }, 2000);
        },
        error => {
          console.error('Error adding vehicle:', error);
        }
      );
    } else {
      this.apiService.updateVehicles(formData, this.id).subscribe(
        () => {
          this.updateAlert = true;
          setTimeout(() => {
            this.updateAlert = false;
            this.router.navigate(['/list-vehicles']);
          }, 2000);
        },
        error => {
          console.error('Error updating vehicle:', error);
        }
      );
    }
  }
  resetForm() {
    this.form = {
      vehicleName: "",
      vehicleType: "",
      vehicleNo: "",
      insuranceNo: "",
      insurancePhoto: "",
      insuranceExpiry: "",
      pucNo: "",
      pucPhoto: "",
      pucExpiry: "",
      rcExpiry: "",
      active: 1
    };
    this.selectedFiles = {};
    this.id = 0;
  }

}

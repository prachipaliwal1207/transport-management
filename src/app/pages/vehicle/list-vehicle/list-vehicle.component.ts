import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrl: './list-vehicle.component.scss'
})

export class ListVehicleComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'vehicleName', 'vehicleType', 'vehicleNo', 'insuranceNo', 'insurancePhoto','insuranceExpiry', 'pucNo' , 'pucPhoto', 'pucExpiry' , 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  form: any = {
    vehicleName: "",
    vehicleType:"",
    vehicleNo:"",
    insuranceNo:"",
    insurancePhoto:"",
    insuranceExpiry:"",
    pucNo:"",
    pucPhoto:"",
    pucExpiry:"",
  }
  successAlert: boolean = false;
  deleteAlert:boolean = false;
  id: any = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getData() {
    this.apiService.getVehicles().subscribe((res: any) => {
      this.dataSource = res.data;
    })
  }

  deleteElement(id: any) {
    this.apiService.deleteVehicles(id).subscribe((res) => {
      console.log('Successfully delete')
      this.deleteAlert = true;
      setTimeout(()=>{
        this.deleteAlert = false;
      },1000)
      this.ngOnInit();
    }, (err) => {
      console.error('Error occurred while deleting', err);
    });
  }


  printPage() {
    window.print();
  }
}


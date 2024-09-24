import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrl: './list-booking.component.scss'
})
export class ListBookingComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    "id",
    'bookingDate', 
    'bookingId', 
    'consignor', 
    'consignee', 
    'declareValue', 
    'actualWeight', 
    'noOfParcels', 
    'chargedWeight', 
    'amount', 
    'freight', 
    'docketCharges', 
    'fuelCharges', 
    'loading', 
    'unloading', 
    'doorDelivery', 
    'collectionCharges', 
    'insuranceCharges', 
    'total', 
    'gst', 
    'finalTotal', 
    'note', 
    'paymentMode', 
    'deliveryNote', 
    'status'
  ];
  
  dataSource = new MatTableDataSource<any>([]);

  form: any = {
    bookingDate:"",
    bookingId:"",
    consignor:"",
    consignee: null,
    declareValue:"",
    actualWeight:"",
    noOfParcels:"",
    chargedWeight:"",
    amount:"",
    freight:"",
    docketCharges:"",
    fuleCharges:"",
    loading:"",
    unloading:"",
    doorDelivery:"",
    collectionCharges:"",
    insuranceCharges:"",
    total:"",
    gst:"",
    finalTotal:"",
    note:"",
    paymentMode:"",
    deliveryNote:"",
    status:"",
  }
  
  successAlert: boolean = false;
  id: any = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getData() {
   
  }

  editElement(element: any) {
  
  }

  deleteElement(del: any) {
 
  }

  printPage() {
    window.print();
  }
}


import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.scss'
})
export class AddBookingComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) { }


  date: any = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  form:any = {
    bookingDate:"",
    bookingId:"",
    consigner:"",
    consignee: null,
    declaredValue:"",
    actualWeight:"",
    noofparcles:"",
    chargedWeight:"",
    amount:"",
    freight:"",
    docketCharges:"",
    fuleCharges:"",
    loadingCharge:"",
    unloadingCharge:"",
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
    agencyId:"",
    active:1

  }
  active: boolean = true;
  id = 0;
  remark: any = '';

  successAlert: boolean = false;

  sale: any = {}



  pumps: any = [];
  parties: any = [];
  partiesTo: any = [];
  partiesPurchase: any = [];
  vehicles: any = [];
  materials: any = [];




  ngOnInit(): void {
  }

  addBooking(addBookingForm: any) {
    console.log(this.form)
  }


}
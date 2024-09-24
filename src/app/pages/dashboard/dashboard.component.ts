import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  fules: any = [];
  sales: any = [];

  todaysale: any = '';
  todaysaleamt: any = '';
  todayfule: any = '';
  vehiclesExpiring: { [key: string]: any[] } = {};
  bg: any = ['primary', 'secondary', 'warning', 'info', 'danger'];

  ngOnInit(): void {  }

}

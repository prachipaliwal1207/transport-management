
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss'
})

export class ListClientsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'pincode', 'mobile', 'mobile2', 'email', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  form: any = {
    fname: "",
    address: "",
    gstIn: "",
    pincode: "",
    city: "",
    state: "",
    mobile: "",
    mobile2: "",
    email: "",
    agencyId: "",
    active: 1
  }
  successAlert: boolean = false;
  deleteAlert:boolean = false;
  id: any = 0;
  data: any = ''

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getData() {
    this.apiService.getClient().subscribe((res: any) => {
      this.dataSource = res.data;
    })
  }

  deleteElement(id: any) {
    this.apiService.deleteClient(id).subscribe((res) => {
      console.log('Successfully delete')
      this.deleteAlert = true;
      setTimeout(()=>{
        this.scrollToTop();
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

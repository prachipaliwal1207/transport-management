import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-list-payments',
  templateUrl: './list-payments.component.html',
  styleUrl: './list-payments.component.scss'
})

export class ListPaymentsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'clientId', 'dateTime', 'amount', 'paymentMethod', 'note', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  successAlert: boolean = false;
  deleteAlert: boolean = false;
  id: any = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getData() {
    this.apiService.getPayment().subscribe((res: any) => {
      this.dataSource = res.data;
      // console.log(this.dataSource)
    })
  }

  deleteElement(id: any) {
    this.apiService.deletePayment(id).subscribe((res) => {
      console.log('Successfully delete')
      this.deleteAlert = true;
      setTimeout(() => {
        this.deleteAlert = false;
      }, 1000)
      this.ngOnInit();
    }, (err) => {
      console.error('Error occurred while deleting', err);
    });
  }

  printPage() {
    window.print();
  }
}


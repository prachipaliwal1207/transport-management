import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})

export class ListUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'username', 'mobileno', 'pincode', 'actions'];
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
    this.apiService.getUsers().subscribe((res: any) => {
      this.dataSource = res.data;
      // console.log(this.dataSource)
    })
  }

  deleteElement(del: any) {
    this.deleteAlert = true;
    setTimeout(() => {
      this.deleteAlert = false;
    }, 1000)
  }

  printPage() {
    window.print();
  }
}

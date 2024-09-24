import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-list-expense-type',
  templateUrl: './list-expense-type.component.html',
  styleUrl: './list-expense-type.component.scss'
})
export class ListExpenseTypeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'icon', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  form: any = {
    name: "",
    icon: "",
  }

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
    this.apiService.getExpenseType().subscribe((res: any) => {
      this.dataSource = res.data;
      // console.log(this.dataSource)
    })
  }


  deleteElement(id: any) {
    this.apiService.deleteExpenseType(id).subscribe((res) => {
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


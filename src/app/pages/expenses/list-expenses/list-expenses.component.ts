import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.scss'
})

export class ListExpensesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'vehicleId', 'expenseType', 'dateAdded', 'amount', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  form: any = {
    vehicleId: "",
    exprenseType: "",
    dateAdded: "",
    userId: "",
    amount: "",
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
    this.apiService.getExpenses().subscribe((res: any) => {
      this.dataSource = res.data;
      // console.log(this.dataSource)
    })
  }
  
  deleteElement(id: any) {
    this.apiService.deleteExpenses(id).subscribe((res) => {
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


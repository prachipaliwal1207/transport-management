import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Matrial Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AuthComponent } from './pages/auth/auth.component';
import { PagesComponent } from './pages/pages/pages.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddVehicleComponent } from './pages/vehicle/add-vehicle/add-vehicle.component';
import { ListVehicleComponent } from './pages/vehicle/list-vehicle/list-vehicle.component';
import { AddBookingComponent } from './pages/booking/add-booking/add-booking.component';
import { ListBookingComponent } from './pages/booking/list-booking/list-booking.component';
import { AddPaymentsComponent } from './pages/payments/add-payments/add-payments.component';
import { ListPaymentsComponent } from './pages/payments/list-payments/list-payments.component';
import { ListPayslipsComponent } from './pages/payslip/list-payslips/list-payslips.component';
import { AddPayslipComponent } from './pages/payslip/add-payslip/add-payslip.component';
import { AddSalaryComponent } from './pages/salary/add-salary/add-salary.component';
import { ListSalaryComponent } from './pages/salary/list-salary/list-salary.component';
import { AddStaffComponent } from './pages/staff/add-staff/add-staff.component';
import { ListStaffComponent } from './pages/staff/list-staff/list-staff.component';
import { AddExpensesComponent } from './pages/expenses/add-expenses/add-expenses.component';
import { ListExpensesComponent } from './pages/expenses/list-expenses/list-expenses.component';
import { AddUserComponent } from './pages/config/users/add-user/add-user.component';
import { ListUserComponent } from './pages/config/users/list-user/list-user.component';
import { AddExpenseTypeComponent } from './pages/config/add-expense-type/add-expense-type.component';
import { ListExpenseTypeComponent } from './pages/config/list-expense-type/list-expense-type.component';
import { ParclesReportComponent } from './pages/report/parcles-report/parcles-report.component';
import { ClientLedgerComponent } from './pages/report/client-ledger/client-ledger.component';
import { PayslipsReportComponent } from './pages/report/payslips-report/payslips-report.component';
import { AddClientsComponent } from './pages/clients/add-clients/add-clients.component';
import { ListClientsComponent } from './pages/clients/list-clients/list-clients.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    AuthComponent,
    PagesComponent,
    ChangePasswordComponent,
    AddVehicleComponent,
    ListVehicleComponent,
    AddBookingComponent,
    ListBookingComponent,
    AddPaymentsComponent,
    ListPaymentsComponent,
    ListPayslipsComponent,
    AddPayslipComponent,
    AddSalaryComponent,
    ListSalaryComponent,
    AddStaffComponent,
    ListStaffComponent,
    AddExpensesComponent,
    ListExpensesComponent,
    AddUserComponent,
    ListUserComponent,
    AddExpenseTypeComponent,
    ListExpenseTypeComponent,
    ParclesReportComponent,
    ClientLedgerComponent,
    PayslipsReportComponent,
    AddClientsComponent,
    ListClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    HttpClientModule,
    MatTableExporterModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [
    provideAnimationsAsync(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

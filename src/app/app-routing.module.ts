import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoginGuard } from './is-login.guard';
import { PagesComponent } from './pages/pages/pages.component';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddBookingComponent } from './pages/booking/add-booking/add-booking.component';
import { ListBookingComponent } from './pages/booking/list-booking/list-booking.component';
import { AddExpensesComponent } from './pages/expenses/add-expenses/add-expenses.component';
import { ListExpensesComponent } from './pages/expenses/list-expenses/list-expenses.component';
import { ListPaymentsComponent } from './pages/payments/list-payments/list-payments.component';
import { AddPaymentsComponent } from './pages/payments/add-payments/add-payments.component';
import { ListPayslipsComponent } from './pages/payslip/list-payslips/list-payslips.component';
import { AddPayslipComponent } from './pages/payslip/add-payslip/add-payslip.component';
import { AddSalaryComponent } from './pages/salary/add-salary/add-salary.component';
import { ListSalaryComponent } from './pages/salary/list-salary/list-salary.component';
import { ListStaffComponent } from './pages/staff/list-staff/list-staff.component';
import { AddStaffComponent } from './pages/staff/add-staff/add-staff.component';
import { ListExpenseTypeComponent } from './pages/config/list-expense-type/list-expense-type.component';
import { AddExpenseTypeComponent } from './pages/config/add-expense-type/add-expense-type.component';
import { ParclesReportComponent } from './pages/report/parcles-report/parcles-report.component';
import { ClientLedgerComponent } from './pages/report/client-ledger/client-ledger.component';
import { PayslipsReportComponent } from './pages/report/payslips-report/payslips-report.component';
import { AddUserComponent } from './pages/config/users/add-user/add-user.component';
import { ListUserComponent } from './pages/config/users/list-user/list-user.component';
import { AddClientsComponent } from './pages/clients/add-clients/add-clients.component';
import { ListClientsComponent } from './pages/clients/list-clients/list-clients.component';
import { ListVehicleComponent } from './pages/vehicle/list-vehicle/list-vehicle.component';
import { AddVehicleComponent } from './pages/vehicle/add-vehicle/add-vehicle.component';


const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    canActivate: [IsLoginGuard],
    component: PagesComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-booking', component: AddBookingComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-booking/:id', component: AddBookingComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'list-booking', component: ListBookingComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-expenses', component: AddExpensesComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-expenses/:id', component: AddExpensesComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'list-expenses', component: ListExpensesComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-vehicle', component: AddVehicleComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-vehicle/:id', component: AddVehicleComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'list-vehicles', component: ListVehicleComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-payment', component: AddPaymentsComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-payment/:id', component: AddPaymentsComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'list-payment', component: ListPaymentsComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-payslip', component: AddPayslipComponent,
        canActivate: [IsLoginGuard]
      }
      ,
      {
        path: 'add-payslip/:id', component: AddPayslipComponent,
        canActivate: [IsLoginGuard]
      }
      ,
      {
        path: 'list-payslip', component: ListPayslipsComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-salary', component: AddSalaryComponent,
        canActivate: [IsLoginGuard]
      }
      ,
      {
        path: 'add-salary/:id', component: AddSalaryComponent,
        canActivate: [IsLoginGuard]
      }
      ,
      {
        path: 'list-salary', component: ListSalaryComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-staff', component: AddStaffComponent,
        canActivate: [IsLoginGuard]
      }
      ,
      {
        path: 'add-staff/:id', component: AddStaffComponent,
        canActivate: [IsLoginGuard]
      }
      ,
      {
        path: 'list-staff', component: ListStaffComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-expenseType', component: AddExpenseTypeComponent,
        canActivate: [IsLoginGuard]
      }
      ,
      {
        path: 'add-expenseType/:id', component: AddExpenseTypeComponent,
        canActivate: [IsLoginGuard]
      }
      ,
      {
        path: 'list-expenseType', component: ListExpenseTypeComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'parcles-report', component: ParclesReportComponent,
        canActivate: [IsLoginGuard]
      }
      ,
      {
        path: 'client-ledger', component: ClientLedgerComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'payslips-report', component: PayslipsReportComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-user', component: AddUserComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-user/:id', component: AddUserComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'list-user', component: ListUserComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-clients', component: AddClientsComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'add-clients/:id', component: AddClientsComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'list-clients', component: ListClientsComponent,
        canActivate: [IsLoginGuard]
      },
      {
        path: 'change-pass', component: ChangePasswordComponent,
        canActivate: [IsLoginGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

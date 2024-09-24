import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
  url: any = "https://freewayweb.in/demo/transport_demo/api/";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  ngOnInit(): void {

  }
  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(this.url + 'login_post', data, { headers: this.headers });
  }

  getPaymentAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/payments/${agencyId}/${id}`)
  }

  getPayment() {
    return this.http.get(this.url + `get_table/payments/`)
  }

  addPayment(data: any) {
    return this.http.post(this.url + 'post_table/payments/', data, { headers: this.headers });
  }

  updatePayment(data: any, id = 0) {
    return this.http.put(this.url + `put_table/payments/${id}`, data);
  }

  deletePayment(id=0){
    return this.http.delete(this.url+ `delete_table/payments/${id}`)
  }

  getExpensesAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/expenses/${agencyId}/${id}`)
  }

  getExpenses() {
    return this.http.get(this.url + `get_table/expenses/`)
  }

  addExpenses(data: any) {
    return this.http.post(this.url + 'post_table/expenses/', data, { headers: this.headers });
  }

  updateExpenses(data: any, id = 0) {
    return this.http.put(this.url + `put_table/expenses/${id}`, data);
  }

  deleteExpenses(id=0){
    return this.http.delete(this.url+ `delete_table/expenses/${id}`)
  }

  getClient() {
    return this.http.get(this.url + `get_table/client/`)
  }

  getClientAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/client/${agencyId}/${id}`)
  }

  addClient(data: any) {
    return this.http.post(this.url + 'post_table/client/', data, { headers: this.headers });
  }

  updateClient(data: any, id = 0) {
    return this.http.put(this.url + `put_table/client/${id}`, data);
  }

  deleteClient(id=0){
    return this.http.delete(this.url+ `delete_table/client/${id}`)
  }

  getStaff() {
    return this.http.get(this.url + `get_table/staff/`)
  }

  getStaffAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/staff/${agencyId}/${id}`)
  }

  addStaff(data: any) {
    return this.http.post(this.url + 'post_table/staff/', data, { headers: this.headers });
  }

  updateStaff(data: any, id = 0) {
    return this.http.put(this.url + `put_table/staff/${id}`, data);
  }

  deleteStaff(id=0){
    return this.http.delete(this.url+ `delete_table/staff/${id}`)
  }

  getPayslips() {
    return this.http.get(this.url + `get_table/payslips/`)
  }

  getPayslipsAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/payslips/${agencyId}/${id}`)
  }

  addPayslips(data: any) {
    return this.http.post(this.url + 'post_table/payslips/', data, { headers: this.headers });
  }

  updatePayslips(data: any, id = 0) {
    return this.http.put(this.url + `put_table/payslips/${id}`, data);
  }

  deletePayslip(id=0){
    return this.http.delete(this.url+ `delete_table/payslips/${id}`)
  }

  getExpenseType() {
    return this.http.get(this.url + `get_table/expensestype/`)
  }

  getExpenseTypeAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/expensestype/${agencyId}/${id}`)
  }

  addExpenseType(data: any) {
    return this.http.post(this.url + 'post_table/expensestype/', data, { headers: this.headers });
  }

  updateExpenseType(data: any, id = 0) {
    return this.http.put(this.url + `put_table/expensestype/${id}`, data);
  }

  deleteExpenseType(id=0){
    return this.http.delete(this.url+ `delete_table/expensestype/${id}`)
  }

  getLogisticStatus() {
    return this.http.get(this.url + `get_table/logisticstatus/`)
  }

  getLogisticStatusAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/logisticstatus/${agencyId}/${id}`)
  }

  addLogisticStatus(data: any) {
    return this.http.post(this.url + 'post_table/logisticstatus/', data, { headers: this.headers });
  }

  updateLogisticStatus(data: any, id = 0) {
    return this.http.put(this.url + `put_table/logisticstatus/${id}`, data);
  }

  deleteLogisticStatus(id=0){
    return this.http.delete(this.url+ `delete_table/logisticstatus/${id}`)
  }

  getAgencyData() {
    return this.http.get(this.url + `get_table/agency/`)
  }

  getAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/agency/${agencyId}/${id}`)
  }

  addAgency(data: any) {
    return this.http.post(this.url + 'post_table/agency/', data, { headers: this.headers });
  }

  updateAgency(data: any, id = 0) {
    return this.http.put(this.url + `put_table/agency/${id}`, data);
  }

  deleteAgency(id=0){
    return this.http.delete(this.url+ `delete_table/agency/${id}`)
  }

  getVehicles() {
    return this.http.get(this.url + `get_table/vehicles/`)
  }

  getVehiclesAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/vehicles/${agencyId}/${id}`)
  }

  addVehicles(data: any) {
    return this.http.post(this.url + 'post_table/vehicles/', data);
  }

  updateVehicles(data: any, id = 0) {
    return this.http.put(this.url + `put_table/vehicles/${id}`, data);
  }

  deleteVehicles(id=0){
    return this.http.delete(this.url+ `delete_table/vehicles/${id}`)
  }

  getUsers() {
    return this.http.get(this.url + `get_table/users/`)
  }

  getUsersAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/users/${agencyId}/${id}`)
  }

  addUsers(data: any) {
    return this.http.post(this.url + 'post_table/users/', data, { headers: this.headers });
  }

  updateUsers(data: any, id = 0) {
    return this.http.put(this.url + `put_table/users/${id}`, data);
  }

  deleteUsers(id=0){
    return this.http.delete(this.url+ `delete_table/users/${id}`)
  }

  getAdvance() {
    return this.http.get(this.url + `get_table/advance/`)
  }

  getAdvanceAgency(agencyId = 0, id = 0) {
    return this.http.get(this.url + `get_table/advance/${agencyId}/${id}`)
  }

  addAdvance(data: any) {
    return this.http.post(this.url + 'post_table/advance/', data, { headers: this.headers });
  }

  updateAdvance(data: any, id = 0) {
    return this.http.put(this.url + `put_table/advance/${id}`, data);
  }

  deleteAdvance(id=0){
    return this.http.delete(this.url+ `delete_table/advance/${id}`)
  }
}

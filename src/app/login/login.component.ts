import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, private apiService: ApiService) { }
  username: string = '';
  password: string = '';
  showError: boolean = false;


  login() {
    const data = {
      username: this.username,
      password: this.password
    }

    this.apiService.login(data).subscribe((res: any) => {
      if (this.username && this.password) {
        if (res.message == "Login successful") {
          this.router.navigate(['/dashboard']);
          const {pincode, ...user} = res.user;
          localStorage.setItem('user', JSON.stringify(user));
        }
      }
    },
      (error) => {
        console.error('Login error:', error);
        this.showError = true;
        setTimeout(()=>{
          this.username = '';
          this.password = '';
          this.showError = false;
        },2000)
      })
  }
}


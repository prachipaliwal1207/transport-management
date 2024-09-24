import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  passwordForm: FormGroup;
  successAlert: boolean = false;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void { }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup?.get('newPassword')?.value;
    const confirmPassword = formGroup?.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      const formValues = this.passwordForm.value;
      console.log('Password change request:', formValues);
      const user = {
        id: 1,
        password: formValues.newPassword
      }

    //   this.apiService.updatePassword(1, user).subscribe(() => {
    //     this.successAlert = true;
    //     setTimeout(() => {
    //       this.successAlert = false;
    //       this.router.navigate(['dashboard']);
    //     }, 500);
    //   }, (error) => {
    //     console.error('Error adding note:', error);
    //   });
    // }
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ButtonModule, PasswordModule, RippleModule, InputTextModule, RouterLink,CommonModule,ToastModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    username: '',
    password: ''
  }
  userService: any;
  signupError: string | undefined;
  toastService: any;
  router: any;
  signup(form: NgForm) {
    if (form.invalid) {
      return;
    }
  
    // Password and Confirm Password check
    // if (this.user.password !== this.user.confirmPassword) {
    //   this.signupError = 'Passwords do not match.';
    //   return;
    // }
  
    // Clear previous error
    this.signupError = '';
  
    // Now call your registration logic or API here
    // Example:
    this.userService.registerUser(this.user).subscribe({
      next: () => {
        this.toastService.success('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        this.signupError = 'Registration failed. Please try again.';
        console.error(err);
      }
    });
  }
  
}

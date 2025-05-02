import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ToastModule, CommonModule, FormsModule, ButtonModule, PasswordModule, InputTextModule, CommonModule, RouterModule
    , InputTextModule, MessagesModule],
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  invalidCredential = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  login(form: NgForm) {
    if (!form.valid) {
      this.messageService.add({ severity: 'warn', summary: 'Invalid Form', detail: 'Please fix the errors.' });
      return;
    }

    this.authService.login(this.user).subscribe({
      next: (res) => {
        localStorage.setItem('userId', res.userId.toString());
        localStorage.setItem('userName', res.userName);
        this.messageService.add({ severity: 'success', summary: 'Login Successful' });
        this.router.navigate(['/dashboard']); // adjust route as needed
      },
      error: (err) => {
        this.invalidCredential = 'Invalid username or password';
        this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: 'Invalid credentials' });
      }
    });
  }
}

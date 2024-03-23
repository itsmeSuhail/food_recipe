import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { authProps } from '../../types/auth';
import { AuthservicesService } from '../../services/authservices.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(private authService: AuthservicesService) { }
  isRegister = false
  signup: authProps = {
    email: '',
    password: '',
    name: ''
  }
  login: authProps = {
    email: '',
    password: ''
  }
  OnLoginsubmit() {
    console.log(this.login);
    this.authService.loginFetch(this.login).subscribe({
      next: (res) => {
        console.log(res, "login");
      }
    })
  }
  OnSignupsubmit() {
    console.log(this.signup);
    this.authService.registerFetch(this.signup).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
  toggle() {
    this.isRegister = !this.isRegister;
  }
}

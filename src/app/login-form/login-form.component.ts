import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [
    trigger('submitState', [
      state('initial', style({
        backgroundColor: '#007bff'
      })),
      state('submitted', style({
        backgroundColor: '#28a745'
      })),
      transition('initial => submitted', animate('300ms ease-in')),
    ])
  ]
})
export class LoginFormComponent {
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  submitState = 'initial';

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.submitState = 'submitted';
      console.log('Form Submitted!', this.loginForm.value);
      this.router.navigate(['/contact-details']);
    }
  }

  forgotPassword() {
    console.log('Forgot Password?');
  }
}

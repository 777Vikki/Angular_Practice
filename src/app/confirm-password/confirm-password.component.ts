import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {

  confirmPasswordForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createPasswordForm();
  }

  createPasswordForm() {
    this.confirmPasswordForm = this.fb.group({
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.confirmPasswordForm.value);
  }

}

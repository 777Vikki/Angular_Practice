import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  EmployeeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
//     see notes and Reactive Property Notes in src folder
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.EmployeeForm = this.fb.group({
      FName: ['', [Validators.required]],
      LName: ['', [Validators.required]]
    });
  }

  get Controls() {
    return this.EmployeeForm.controls;
  }

  checkControls(controlName: string) {
    // we can use all 
    // return eval("this.Controls." + controlName +".invalid && this.Controls." + controlName + ".touched");
    // return this.Controls[controlName].invalid && this.Controls[controlName].touched;
    return this.EmployeeForm.get(controlName).invalid && this.EmployeeForm.get(controlName).touched;
  }
  onSubmit() {
    console.log(this.EmployeeForm);
  }
}

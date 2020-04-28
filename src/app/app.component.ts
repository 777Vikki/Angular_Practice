import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.setProfileForm();
  }

  setProfileForm() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  // This return AbstractControl and access aliases
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAliases() {
    this.aliases.push(this.fb.control(''));
  }

  cancelAliases(index: number) {
    this.aliases.removeAt(index);
  }

  clearAliases() {
    this.aliases.clear();
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}

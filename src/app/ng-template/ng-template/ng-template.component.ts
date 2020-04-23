import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {

  loginText = "Login";
  signUpText = "Sign Up";
  lessons = ["Lesson 1", "Lesson 2"];
  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log("login")
  }

  signUp() {
    console.log("singUp");
  }

}

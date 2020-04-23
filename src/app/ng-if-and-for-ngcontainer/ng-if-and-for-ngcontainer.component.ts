import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-and-for-ngcontainer',
  templateUrl: './ng-if-and-for-ngcontainer.component.html',
  styleUrls: ['./ng-if-and-for-ngcontainer.component.css']
})
export class NgIfAndForNgcontainerComponent implements OnInit {
  loginText = "Login";
  signUpText = "Sign Up";
  lessons = ["Lesson 1", "Lesson 2"];
  constructor() { }

  ngOnInit() {
  }

}

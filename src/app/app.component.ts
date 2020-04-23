import { Component, OnInit, ViewChild, TemplateRef, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loginText = "Login";
  signUpText = "Sign Up"
  @Input() headerTemplate: TemplateRef<any>;
  @ViewChild('defaultTabButtons',{static: false})
  private defaultTabButtonsTpl: TemplateRef<any>;
  constructor() {}
  ngOnInit() {
    console.log(this.headerTemplate);
  }
  login() {

  }

  signUp() {

  }

}

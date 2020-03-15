import { Component, OnInit } from '@angular/core';
import { mapKeyValueRole } from './model/role-mapping';
import { IRole } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Roles: IRole[];
  Role = 'Vivek Kumar Maurya, Mayank, Vipin Singh,Vaibhav Tripathi,     Mat,    Amar Pandey   ';
  ngOnInit() {
    this.Roles = mapKeyValueRole(this.Role);
  }
}

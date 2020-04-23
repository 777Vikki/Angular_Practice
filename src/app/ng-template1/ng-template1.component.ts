import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template1',
  templateUrl: './ng-template1.component.html',
  styleUrls: ['./ng-template1.component.css']
})
export class NgTemplate1Component implements OnInit {

  lessons = true;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.css']
})
export class NgTemplateOutletComponent implements OnInit {
  totalEstimate = 10;
  ctx = {
    estimate: this.totalEstimate,
    name: "vivek"
  };
  constructor() { }

  ngOnInit() {
  }

}

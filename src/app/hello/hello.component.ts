import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @ViewChild('name', {static: false}) pRef: ElementRef;
  @ViewChild('para', {static: false}) pPara: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  getChild() {
    return "Child Component";
  }
}

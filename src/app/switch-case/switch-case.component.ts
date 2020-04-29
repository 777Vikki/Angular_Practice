import { Component, OnInit } from "@angular/core";
interface Item {
  name: string;
  val: number;
}

@Component({
  selector: "app-switch-case",
  templateUrl: "./switch-case.component.html",
  styleUrls: ["./switch-case.component.css"],
})
export class SwitchCaseComponent implements OnInit {
  items: Item[] = [
    { name: "One", val: 1 },
    { name: "Two", val: 2 },
    { name: "Three", val: 3 },
  ];
  selectedValue: string = "Two";
  constructor() {}

  ngOnInit() {}
}

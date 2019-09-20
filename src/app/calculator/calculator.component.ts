import { mathInput, buttonList } from "./../button-list";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  buttons: mathInput[] = buttonList
  display: string = ""

  updateDisplay(val: string) {
    this.display += val
  }


}
import { buttonList } from "./../button-list";
import { Component, OnInit } from "@angular/core";
import { CssSelector } from '@angular/compiler';

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  buttons: any = buttonList;

  sigma(start: number, end: number, func: any) {
    let result: number = 0;
    for (var i = start; i <= end; i++) {
      result += func 
    }
    console.log(result)
    return result
  }

  constructor() {}
  ngOnInit() {}
}

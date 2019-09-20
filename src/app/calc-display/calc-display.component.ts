import { Component, OnInit, Input } from "@angular/core";
import { CssSelector } from '@angular/compiler';
declare var MathQuill: any

const MQ = MathQuill.getInterface(2)

@Component({
  selector: "app-calc-display",
  template: `
    <span>
      {{ displayRenderVal }}
    </span>
  `,
  styleUrls: ["./calc-display.component.scss"]
})
export class CalcDisplayComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  mathField: any;
  @Input() displayRenderVal: string;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.mathField = MQ.MathField(document.querySelector("span"))
  }
}

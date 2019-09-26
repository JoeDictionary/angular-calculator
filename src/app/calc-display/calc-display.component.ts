import {
  Component,
  AfterViewInit
} from "@angular/core";
import { MathInput } from './../button-list'
// import {Parser, Grammar} from 'nearley'
// import * as grammar from './../grammar'

declare var MathQuill: any;
const MQ = MathQuill.getInterface(2);



@Component({
  selector: "app-calc-display",
  template: `
    <div (click)="mathField.focus()">
      <span>
      </span>
    </div>
  `,
  styleUrls: ["./calc-display.component.scss"]
})
export class CalcDisplayComponent implements AfterViewInit {
  constructor() {}

  mathField: any;

  updateDisplay(value: MathInput) {
    if (value.mathValue) {
      this.mathField.write(value.mathValue);
      this.mathField.focus();
      console.log(value.mathValue);
    }

    if (value.executeCode) {
      // console.log(value.mathValue);
      value.executeCode(this.mathField)
    }
    
  }

  // parse(value: string) {
  //   const parser = new Parser(Grammar.fromCompiled(grammar));
  //   try {
  //     parser.feed(value);
  //     return parser.results;
  //   } catch (e) {
  //     return "Syntax Error";
  //   }
  // }






  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.mathField = MQ.MathField(document.querySelector("span"));
    this.mathField.focus();
  }
}

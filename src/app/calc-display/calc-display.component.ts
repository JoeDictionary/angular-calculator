import {
  Component,
  AfterViewInit
} from "@angular/core";
import { mathInput } from './../button-list'
import * as nearley from 'nearley'
import * as grammar from './../grammar'
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

  updateDisplay(value: mathInput) {
    if (value.mathValue) {
      this.mathField.write(value.mathValue);
      this.mathField.focus();
      console.log(value.mathValue);
    }

    if (value.actionValue) {
      console.log(value.mathValue);
      eval(value.actionValue)
    }
    
  }

  parse(value: string) {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    try {
      parser.feed(value);
      return parser.results;
    } catch (e) {
      return "Syntax Error";
    }
  }






  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.mathField = MQ.MathField(document.querySelector("span"));
    this.mathField.focus();
  }
}

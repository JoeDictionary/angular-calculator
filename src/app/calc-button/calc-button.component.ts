import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calc-button',
  template: `

    <button [innerHTML]="buttonRenderVal"></button>
    
  `,
  styleUrls: ['./calc-button.component.scss']
})
export class CalcButtonComponent implements OnInit {
  // Values to be rendered inside buttons, input from calculator component
  @Input() buttonRenderVal:string


  constructor() { }

  ngOnInit() {
  }

}

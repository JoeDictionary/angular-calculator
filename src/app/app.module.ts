import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcButtonComponent } from './calc-button/calc-button.component';
import { CalcDisplayComponent } from './calc-display/calc-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalcButtonComponent,
    CalcDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

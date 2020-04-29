import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {  FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

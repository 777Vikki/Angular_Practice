import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    ConfirmPasswordComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

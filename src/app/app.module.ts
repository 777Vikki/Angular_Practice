import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NgTemplateComponent } from './ng-template/ng-template/ng-template.component';
import { NgTemplate1Component } from './ng-template1/ng-template1.component';
import { NgTemplate2Component } from './ng-template2/ng-template2.component';
import { NgIfAndForNgcontainerComponent } from './ng-if-and-for-ngcontainer/ng-if-and-for-ngcontainer.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
@NgModule({
  declarations: [
    AppComponent,
    NgTemplateComponent,
    NgTemplate1Component,
    NgTemplate2Component,
    NgIfAndForNgcontainerComponent,
    NgTemplateOutletComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
